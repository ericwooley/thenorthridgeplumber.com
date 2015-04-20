
/* globals $, Waypoint, _ */
$(function(){
    'use strict';
    $('.site-header').sticky();
    var waypoints = $('.panel');
    _.each(waypoints, function(waypoint){
        new Waypoint({
            element: waypoint,
            offset: '80%',
            handler: function(direction) {
                if(direction === 'down'){
                    $(this.element).addClass('show-badge');
                }
            }
        });
        // new Waypoint({
        //     element: waypoint,
        //     offset: '10%',
        //     handler: function(direction) {
        //         $(this.element).velocity({
        //             opacity: direction === 'up'? 1: 0,
        //         }, 'fast');
        //     }
        // });
        // new Waypoint({
        //     element: waypoint,
        //     offset: '85%',
        //     handler: function(direction) {
        //         $(this.element).animate({
        //             opacity: direction === 'up'? 0: 1,
        //         }, 'slow');
        //     }
        // });
    });
});