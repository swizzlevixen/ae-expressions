// Makes a pen drawing a line to tilt up and down depending on vector velocity

// Anchor of line should be at tip of pen
// Set resting angle in the Rotation field; designed for 45º, with tip at lower left

// TODO: Make a function in here to calculate top speed, so we don't go beyond
//     30º (or other constant) as max angle offset

nowFrame = timeToFrames(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false)
nextFrame = nowFrame + 1
nextTime = framesToTime(nextFrame, fps = 1.0 / thisComp.frameDuration)
deltaX = transform.position[0] - transform.position.valueAtTime(nextTime)[0]
deltaY = transform.position[1] - transform.position.valueAtTime(nextTime)[1]
// TODO: make a constant for this arbitrary offset factor
tilt = transform.rotation + ((deltaX + deltaY) / 2)

// That's super rough. Let's do it with a little bounce.

// amplitude: amplitude, how much bounce is present
// frequency: frequency, how frequently the bounce occurs
// decayMass: a friction/mass setting, higher value means a shorter decay

// velocityFactor: here, since we're translating position velocity to an angle,
//                 we need to scale down the velocity to a sane angular value

amplitude = 2.0;
frequency = 0.1;
decayMass = 10.0;
velocityFraction = 0.15;

keyNumber = 0;
if ( transform.position.numKeys > 0 ) {
    keyNumber = transform.position.nearestKey(time).index;
    // if the key is after this frame, subtract one to get the previous keyframe index
    if ( transform.position.key(keyNumber).time > time ) {
        keyNumber--;
    }
}

if (keyNumber == 0) {
    timeDelta = 0;
} else {
    // timeDelta = time since last keyframe
    timeDelta = time - transform.position.key(keyNumber).time;
}

if (keyNumber > 0 && timeDelta < 1) {
    // keyVelocity: velocity at 1/10th of a frame before the keyframe
    keyVelocity = transform.position.velocityAtTime( transform.position.key(keyNumber).time - thisComp.frameDuration / 10 );
    // separate bounce for X and Y velocities, since we need to make one angle
    // TODO: This should be a function
    bounceX = keyVelocity[0] * amplitude * Math.sin( frequency * timeDelta * 2 * Math.PI ) / Math.exp( decayMass * timeDelta );
    bounceY = keyVelocity[0] * amplitude * Math.sin( frequency * timeDelta * 2 * Math.PI ) / Math.exp( decayMass * timeDelta );
    tiltBounce = tilt + ((bounceX + bounceY) / 50)
} else {
    tilt;
}
