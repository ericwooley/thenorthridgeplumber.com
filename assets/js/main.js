
/* globals $, Waypoint, _ */
$(function(){
    'use strict';
    $('.site-header').sticky();
    var waypoints = $('.panel');
    _.each(waypoints, function(waypoint){
        new Waypoint({
            element: waypoint,
            offset: '90%',
            handler: function(direction) {
                if(direction === 'down'){
                    $(this.element).addClass('show-badge');
                }
            }
        });
    });
});