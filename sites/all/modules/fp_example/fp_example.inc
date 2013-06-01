<?
    
    
function fp_example_flowplayer(){
   $files_path = variable_get('file_' . file_default_scheme() . '_path', conf_path() . '/files');
   $video = '<a href="'.$files_path.'/Popeye_forPresident_512kb.mp4'.'"';
   $video .=' id="player" class="flowplayer"></a>';
   $page_content='<div>Testing flowplayer!!</div>';
   $page_content.=$video; 
   flowplayer_add('#player', array(
        'clip' => array(
            'autoPlay' => FALSE, // Turn autoplay off
        ),
   )); 
    return $page_content;
}
   
function fp_example_2(){
    drupal_add_js(drupal_get_path('module', 'flowplayer').'/flowplayer/flowplayer-3.2.12.min.js', 'file');
    //add css
    drupal_add_css(drupal_get_path('module', 'fp_example') . '/css/fp_example_2.css','file');     
    //add js                
    drupal_add_js(drupal_get_path('module', 'fp_example') .'/js/fp_example_2.js','file');
    //add page content
    $page_content='<div>Testing flowplayer Example 2!</div>';
    $page_content.= '<div id="flowplayer">player goes here</div>';
    return $page_content;
}

function fp_example_3(){
    drupal_add_js(drupal_get_path('module', 'flowplayer').'/flowplayer/flowplayer-3.2.12.min.js', 'file');
    //add css
    drupal_add_css(drupal_get_path('module', 'fp_example') .'/css/fp_example_3.css'); 
    //add js                
    drupal_add_js(drupal_get_path('module', 'fp_example') .'/js/fp_example_3.js','file');
    //add page content
    $page_content='<div>Testing flowplayer Example 3 with rtmp!</div>';
    $page_content.= '<div id="flowplayer">player goes here</div>';
    return $page_content;
}
function fp_example_4(){
    drupal_add_js(drupal_get_path('module', 'flowplayer').'/flowplayer/flowplayer-3.2.12.min.js', 'file');
    //add css
    drupal_add_css(drupal_get_path('module', 'fp_example') .'/css/fp_example_4.css'); 
    //add js                
    drupal_add_js(drupal_get_path('module', 'fp_example') .'/js/fp_example_4.js','file');
    //add page content
    $page_content='<div>Testing flowplayer with rtmp!</div>';
    $page_content.= '<div id="flowplayer">player goes here</div>';
    $page_content.= '<div id="buttons">';
    $page_content.=     '<span class="button jump">'.t('Jump').'</span>';
    $page_content.=     '<input id="jump_amount" type="text" size="5"/>';
    $page_content.=     '<span class="button play">'.t('Play').'</span>';
    $page_content.=     '<span class="button stop">'.t('stop').'</span>';
    $page_content.= '</div>';
    return $page_content;
}
?> 