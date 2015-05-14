// Scale with Bounce
// - Honestly, I'm not sure why you would use this instead of intertial-bounce,
//   but it was in my archives, so here it is.
//
// Source: unknown
//
// Usage: Umm… fiddle with it?

rate = 200;
rampDur = value[0] / rate;
freq = 3;
decay = 15;
w = freq * Math.PI * 2;

if ( time < ( inPoint + outPoint ) / 2 ) {
    if ( time < ( inPoint + rampDur ) ) {
        s = linear( time, inPoint, inPoint + rampDur, 0, value[0] );
    } else {
        t = time - ( inPoint + rampDur );
        s = value[0] + rate * Math.sin( t * w ) / Math.exp( t * decay ) / w;
    }
} else {
    if ( time > ( outPoint - rampDur ) ) {
        s = linear( time, outPoint - rampDur, outPoint, value[0], 0);
    } else {
        t = ( outPoint - rampDur ) - time;
        s = value[0] + rate * Math.sin( t * w ) / Math.exp( t * decay ) / w;
    }
}
[s,s] // for locked scale