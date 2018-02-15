/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};
exercise.updatePosition = function() {
    exercise.pos.x += exercise.increment
    exercise.img1.style.left = exercise.pos.x + 'px'
};
exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan1.png'
            exercise.flag = 0
        } else {
            exercise.img1.src = 'PacMan2.png'
            exercise.flag = 1
        }
    } else if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan3.png'
            exercise.flag = 0
        } else {
            exercise.img1.src = 'PacMan4.png'
            exercise.flag = 1
        }
    }
};
exercise.checkWallCollision = function() {
    var max_x = 600 - exercise.img1.width
    if (exercise.pos.x >= max_x) {
        exercise.increment = - exercise.increment
    } else if (exercise.pos.x <= 0) {
        exercise.increment = - exercise.increment
    }

};