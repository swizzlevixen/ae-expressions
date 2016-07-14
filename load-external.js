// Load External
// Loads an external javascript file and evaluates it
//
// Author: Mark Boszko
//
// Usage: Replace "~/Desktop/source.js" with the path to your file.
// Expressions do not (as of 2016-07-14) have access to the path of
// your project file, so the location must be hard-coded, making it brittle.
//

try {
    myPath = "~/Desktop/source.js";
    $.evalFile(myPath);
} catch(err) {
    "MISSING";
}
