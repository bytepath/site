/**
 * MyAnimation.js
 * The animation from the previous example, now stored in its own file to keep things tidy
 */
export default [
    /** From frame 0 to frame 100 scroll on the x axis **/
    {
        start: 0,
        end: 100,
        handler({ context, keyframe }) {
            context.balloonPos.x = keyframe * 3;
        },
    },

    /** From frame 100 to frame 200 perform a rotation **/
    {
        start: 100,
        end: 200,
        handler({ context, keyframe }) {
            context.balloonPos.angle = 100 - keyframe;
        },
    },

    /** From frame 200 to frame 300 scroll on the y axis **/
    {
        start: 200,
        end: 300,
        handler({ context, keyframe }) {
            context.balloonPos.y = 200 - keyframe;
        },
    },
];
