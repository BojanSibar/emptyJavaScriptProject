/**
 * Create an observer pattern for jQuery
 * allows you to alias trigger with publish,
 * on with subscribe,
 * and off with unsubcsribe
 * Useful for custom events
 *
 * USAGE:
 * $(el).subscribe('customEvent', function() {
 *       do something when customEvent is published
 *
 *       No longer need to subscribe to custom event
 *       $(el).unsubscribe('customEvent');
 * });
 *
 * Custom event is fired
 * $.publish('customEvent');
 */

  ;(function($) {
      var o = $({});
      $.each({
           trigger: 'publish',
           on: 'subscribe',
           off: 'unsubscribe'
       }, function(key, val) {
           jQuery[val] = function() {
               o[key].apply(o, arguments);
           };
       });
   })(jQuery);
