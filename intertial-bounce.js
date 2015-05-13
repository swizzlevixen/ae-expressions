// Inertial Bounce (moves settle into place after bouncing around a little)

// I feel like this is probably based on something from MotionScript.com, but
// this is the closest one I see online:
// http://www.motion-graphics-exchange.com/after-effects/Wiggle-rubber-bounce-throw-inertia-expressions/4ad0f32a944ad

// These are the settings to tweak to customize the animation
// Amplitude controls how "stretchy" the rubber band is
// Frequency determines how fast it vibrates
// Decay is how fast it settles down. [not sure which way it goes]

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