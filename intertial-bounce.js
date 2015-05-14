// Inertial Bounce
// - moves settle into place after bouncing around a little
//
// Source:
// http://www.graymachine.com/my-top-5-after-effects-expressions/
//
// Usage:
// amp: amplitude, how much bounce is present
// freq: frequency, how frequently the bounce occurs
// decay: a friction/mass setting, higher value means a shorter decay

amp = 0.04;
freq = 3.0;
decay = 10.0;

n = 0;
if ( numKeys > 0 ) {
    n = nearestKey( time ).index;
    if ( key(n).time > time ) {
        n--;
    }
}
if (n == 0) {
    t = 0;
} else {
    t = time - key(n).time;
}
if (n > 0 && t < 1) {
    v = velocityAtTime( key(n).time - thisComp.frameDuration / 10 );
    value + v * amp * Math.sin( freq * t * 2 * Math.PI ) / Math.exp( decay * t );
} else {
    value
}