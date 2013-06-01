(function ($) {
      Drupal.behaviors.test_fp_example_flowplayer_rtmp_with_buttons= {
         attach: function (context) {
          var filename_mp4='sites/default/files/Popeye_forPresident_512kb.mp4';
          var player = $f('flowplayer', "sites/default/modules/flowplayer/flowplayer/flowplayer-3.2.16.swf",                            {
                    connectionCallbacks: [ 'onMyConnectionEvent' ],
                    streamCallbacks: ['onMyStreamEvent', 'onMyOtherStreamEvent'],
                    // key : '#$8867f2e0682e9fa77ba',
                   clip: {
                        url: filename_mp4,
                        autoPlay:true,
                   }});
            }    
         } 
      }
(jQuery));