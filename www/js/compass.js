/*
 * Copyright (c) 2012, Intel Corporation. All rights reserved.
 * File revision: 31 October 2012
 * Please see http://software.intel.com/html5/license/samples 
 * and the included README.md file for license terms and conditions.
 */

// Object for rotation for different modes after button Freeze
var rotate_object = null;
var qibla = 0;
jQuery(function($) {
        //console.log('masuk');
         $.getJSON('http://muslimsalat.com/daily.json?key=54b4773caae224e8d38cebd5a737ec37&jsoncallback=?', function (times)
         {
         
            qibla = times.qibla_direction;
            console.log(qibla);
        });
      });

function startNeedle() {
    rotate_object.style['-webkit-transform'] = 'rotate(0deg)';
    rotate_object = document.getElementById('needle');
}

function startCompass() {
    rotate_object.style['-webkit-transform'] = 'translateX(-33x) rotate(0deg)';
    rotate_object = document.getElementById('compass');
}


// Array of names for directions for Info panel
var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
function direction(heading) {
    var dir = Math.abs(parseInt((heading) / 45) + 1);
    return directions[dir];
}


// Handlers
document.addEventListener("deviceready", onDeviceReady, false);

// The watch id references the current `watchHeading`
var watchID = null;

function onDeviceReady() {
    $('#control').change(function (event) {
        if (event.currentTarget.value == "on")
            startWatch();
        else
            stopWatch();
    }
        );
    $('#freeze').change(function (event) {
        if (event.currentTarget.value == "on")
            startNeedle();
        else
            startCompass();
    }
        );

    rotate_object = document.getElementById('needle');
    startWatch();
}


// Start watching the compass
//
function startWatch() {

    var options = { frequency: 100 };

    watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    $('#freeze+div').show();
}

// Stop watching the compass
//
function stopWatch() {
    if (watchID) {
        navigator.compass.clearWatch(watchID);
        watchID = null;
        $('#freeze+div').hide();
    }
}

// onSuccess: Get the current heading
//
function onSuccess(heading) {
    var transform = null;
    if (rotate_object.id == 'needle') {
        transform = ' translateX(-33px) rotate(' + (360.0 - heading.magneticHeading + parseInt(qibla)) + 'deg)';
    }
    else {
        transform = 'rotate(' + -1 * (heading.magneticHeading) + 'deg)';
    }
    rotate_object.style['-webkit-transform'] = transform;

    // Change Info panel
    document.getElementById('info-panel').innerHTML = 
        direction(heading.magneticHeading) + '<br>' + parseInt(heading.magneticHeading + qibla) + ' &deg;';
}

// onError: Failed to get the heading
//
function onError(compassError) {
    alert('Compass error: ' + compassError.code);
}
    
