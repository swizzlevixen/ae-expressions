// Autofade
// Fades in and out at the ends of the layer
//
// source: http://www.graymachine.com/my-top-5-after-effects-expressions/
//
// Usage: Add expression to Opacity
// If there are no markers, the transition variable (no of frames) is used.
// If there are *2* markers, the first marker is used for end point of the
// fade in, and the second marker is used to define the start of the fade out.

transition = 20;    // transition time in frames

if ( marker.numKeys < 2 ) {
    tSecs = transition / ( 1 / thisComp.frameDuration ); // convert to seconds
    linear( time, inPoint, inPoint + tSecs, 0, 100 ) - linear( time, outPoint - tSecs, outPoint, 0, 100 )
} else {
    linear( time, inPoint, marker.key(1).time, 0, 100 ) - linear( time, marker.key(2).time, outPoint, 0, 100 )
}