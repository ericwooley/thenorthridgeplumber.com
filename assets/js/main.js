$(function(){
    $('.site-header').sticky();
    var waypoints = $('.way-fade');
    _.each(waypoints, function(waypoint){
        new Waypoint({
            element: waypoint,
            offset: '18%',
            handler: function(direction) {
                $(this.element).animate({
                    opacity: direction === 'up'? 1: 0,
                }, 'slow');
            }
        });
        new Waypoint({
            element: waypoint,
            offset: '85%',
            handler: function(direction) {
                $(this.element).animate({
                    opacity: direction === 'up'? 0: 1,
                }, 'slow');
            }
        });
    });
});