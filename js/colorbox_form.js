// $Id$
(function ($) {

Drupal.behaviors.initColorboxForm = function (context) {
  var settings = Drupal.settings.colorbox;
  $.urlParam = function(name, url){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) { return 0; }
    return results[1] || 0;
  };
  $('a, area, input', context).filter('.colorbox-form:not(.initColorboxForm-processed)').addClass('initColorboxForm-processed').colorbox({
    transition:settings.transition,
    speed:settings.speed,
    opacity:settings.opacity,
    close:settings.close,
    overlayClose:settings.overlayclose,
    maxWidth:settings.maxwidth,
    maxHeight:settings.maxheight,
    innerWidth:function(){
      return $.urlParam('width', $(this).attr('href'));
    },
    innerHeight:function(){
      return $.urlParam('height', $(this).attr('href'));
    },
    onComplete:function(){
      $('input:first').focus();
    }
  });
};

})(jQuery);
