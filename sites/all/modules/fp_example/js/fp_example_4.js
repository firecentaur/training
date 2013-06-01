(function ($) {
      Drupal.behaviors.test_fp_example_4= {
         attach: function (context) {
             var filename_mp4='Popeye_forPresident_512kb.mp4';
             var player = $f('flowplayer', "sites/default/modules/flowplayer/flowplayer/flowplayer-3.2.16.swf",                            {
                        connectionCallbacks: [ 'onMyConnectionEvent' ],
                        streamCallbacks: ['onMyStreamEvent', 'onMyOtherStreamEvent'],
                        // key : '#$8867f2e0682e9fa77ba',
                        plugins: {
                             controls: {
                                    // location of the controlbar plugin
                                    url: 'sites/default/modules/flowplayer/flowplayer/flowplayer.controls-3.2.15.swf'
                             },
                                // pseudo: {
                                    //  url: "/sites/all/modules/flowplayer/flowplayer/flowplayer.pseudostreaming-3.2.11.swf",                                          
                                    // }, 
                                 rtmp: {
                                    url: 'sites/default/modules/flowplayer/flowplayer/flowplayer.rtmp-3.2.12.swf',
                                    netConnectionUrl: 'rtmp://54.250.126.138/vod'
                                 },
                            },
                               clip: {
                                                  // provider: "pseudo",
                                                 //  url:"/"+video_url,
                                                  url: 'mp4:'+filename_mp4,
                                                   provider: 'rtmp',
                                                   autoPlay:true,
                                                   autoBuffering:true
                            }});
              } 
            }
      Drupal.behaviors.test_fp_example_4_buttons= {
         attach: function (context) {
             $('.button.play:not(.processed)').bind('click',function(){
                   console.log("playing");
                $f().play();
            }).addClass('processed');       
            
            $('.button.jump:not(.processed)').bind('click',function(){
                var seek_amount = $('#jump_amount').val();
                console.log("seek amount %o",seek_amount);
                $f().seek(seek_amount);
            }).addClass('processed');       
            
            $('.button.stop:not(.processed)').bind('click',function(){
                console.log("pausing");
                $f().pause();                         
            }).addClass('processed');       
         } 
      }
}
(jQuery));