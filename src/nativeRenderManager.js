/*
 * Script to handle firing impression and click trackers from native teamplates
 */
import { parseUrl, triggerPixel, transformAuctionTargetingData } from './utils';
import { newNativeAssetManager } from './nativeAssetManager';

const AD_ANCHOR_CLASS_NAME = 'pb-click';
const AD_DATA_ADID_ATTRIBUTE = 'pbAdId';

export function newNativeRenderManager(win) {
  let publisherDomain;


  function findAdElements(className) {
    let adElements = win.document.getElementsByClassName(className);
    return adElements || [];
  }

  function loadClickTrackers(event, adId) {
    fireTracker(adId, 'click');
  }

  function fireTracker(adId, action) {
    if (adId === '') {
      console.warn('Prebid tracking event was missing \'adId\'.  Was adId macro set in the HTML attribute ' + AD_DATA_ADID_ATTRIBUTE + 'on the ad\'s anchor element');
    } else {
      let message = { message: 'Prebid Native', adId: adId };

      // fires click trackers when called via link
      if (action === 'click') {
        message.action = 'click';
      }

      win.parent.postMessage(JSON.stringify(message), publisherDomain);
    }
  }

  function fireNativeImpTracker(adId) {
    fireTracker(adId, 'impression');
  }

  function fireNativeCallback() {
    const adElements = findAdElements(AD_ANCHOR_CLASS_NAME);
    for (let i = 0; i < adElements.length; i++) {
      adElements[i].addEventListener('click', function(event) {
        loadClickTrackers(event, window.pbNativeData.adId);
      }, true);
    }
  }

  // // global expanded indicator variable, because API don't have any
  // var expanded = false;
  // var returnCount = 0;

  // function expand() {
  //     var self= $sf.ext.geom().self;
  //     var config = {
  //         push: true, // we want to push expanded content
  //         b: 0
  //     };

  //     var el = document.getElementById('container');
  //     console.log('el', el);

  //     if (el) {
  //       var containerHeight = el.offsetHeight || 50;

  //       // get height from bottom, that need to be expanded
  //       var expandBottom = containerHeight - self.h;

  //       // if container is whole inside a SafeFrame, it will not expand
  //       if(expandBottom < 0) return;

  //       config.b = expandBottom;
  //       $sf.ext.expand(config);
  //     } else {
  //       console.log('returnCount', returnCount)
  //       if (returnCount++ < 10) {
  //         setTimeout(expand, 500);
  //       }
  //     }
  // }

  // function expandDelayed(forceExpand = false) {
  //     // expand will run just once, or you can force it to run again
  //     // but collapse first is needed
  //     if(expanded && forceExpand || !expanded) {
  //         $sf.ext.collapse();
  //         expanded = false;
  //         returnCount = 0;
  //         // there must be some timeout, because .collapse(); method is deplayed somehow
  //         setTimeout(expand, 0);
  //     }
  // }

  // START OF MAIN CODE
  let renderNativeAd = function(nativeTag) {
    window.pbNativeData = nativeTag;
    const targetingData = transformAuctionTargetingData(nativeTag);
    const nativeAssetManager = newNativeAssetManager(window);

    if (nativeTag.hasOwnProperty('adId')) {
      let parsedUrl = parseUrl(window.pbNativeData.pubUrl);
      publisherDomain = parsedUrl.protocol + '://' + parsedUrl.host;

      if (nativeTag.hasOwnProperty('rendererUrl') && !nativeTag.rendererUrl.match(/##.*##/i)) {
        const scr = document.createElement('SCRIPT');
        scr.src = nativeTag.rendererUrl,
        scr.id = 'pb-native-renderer';
        document.body.appendChild(scr);
      }
      nativeAssetManager.loadAssets(nativeTag.adId,fireNativeCallback);
      fireNativeCallback();
      fireNativeImpTracker(nativeTag.adId);
      
      // $sf.ext.register(160, 150, function(status, data) {
      //   // this code will do whole magic of "waiting" for right moment
      //   if (status === 'geom-update') {
      //       expandDelayed(true);
      //   }

      //   // change global expanded status
      //   if (status === 'expanded') {
      //       expanded = true;
      //   }
      // });

      // // init
      // expandDelayed();
    } else {
      console.warn('Prebid Native Tag object was missing \'adId\'.');
    }
  }

  return {
    renderNativeAd
  }
}
