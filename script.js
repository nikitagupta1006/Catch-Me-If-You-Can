function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

var changeLocation = function(target) {
    //let coord = document.getElementById('square').getBoundingClientRect();
    let coord = target.getBoundingClientRect();
    let x = randomNum(0, window.innerWidth - coord.width);
    let y = randomNum(0, window.innerHeight - coord.height);
    console.log("x: ", x, " y: ", y);
    target.style.position = "absolute";
    target.style.left = x + "px";
    target.style.top = y + "px";
}


square.addEventListener('click', function(event) {
    changeLocation(event.target);
});

window.addEventListener('resize', function() {
    let target = this.document.getElementById('square');
    let coord = target.getBoundingClientRect();
    if (coord.left >= 0 && coord.right <= this.window.innerWidth && coord.top >= 0 && coord.bottom <= this.window.innerHeight) {
        this.console.log("the box is within the viewport area");
    } else {
        changeLocation(target);
    }
});