window.onload = ()=> {

    let startScreen = document.getElementById("start-screen");
    let startSquare = document.getElementById("start-box");
    let square = document.getElementById("square");
    let counter = document.getElementById("counter");
    let score = document.getElementById("score");

    let startTime, endTime, timeDiff;
    let initTimer = true;

    let timer;

    let counter_clicks = 0;

    startSquare.addEventListener("click", ()=>{
        start30Seconds();

        counter_clicks = 0;
        counter.innerHTML = counter_clicks;
        newSquareLocation(Math.floor(Math.random() * (window.screen.width - 350)) + 100,
                            Math.floor(Math.random() * (window.screen.height - 350)) + 100,
                            1)
        
        displayGameScreen();
    });

    square.addEventListener("click", ()=>{
        if (initTimer) {
            timeDiff = 3000
            initTimer = false
        }
        else {
            timeDiff = end() //ends timer and saves value to timeDiff
        }
        start()  //restarts timer

        let far_enough_away = false

        let current_x = square.getBoundingClientRect().left + 50;
        let current_y = square.getBoundingClientRect().top + 50;

        let bounded_randx;
        let bounded_randy;

        bounded_randx = Math.floor(Math.random() * (window.screen.width-350)) + 100;
        bounded_randy = Math.floor(Math.random() * (window.screen.height-350)) + 100;

        if (timeDiff > 5000) {
            timeDiff = 5750
        }

        counter_clicks += 1;
        counter.innerHTML = counter_clicks;

        newSquareLocation(bounded_randx, bounded_randy, timeDiff);
    });

    function randomColor() {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        return `rgb(${r},${g},${b})`
    }

    function start() {
        startTime = performance.now();
    }

    function end() {
        endTime = performance.now();
        return endTime - startTime;
    }

    function displayGameScreen() {
        startScreen.style.display = "none";
        startSquare.style.display = "none";
        score.style.display = "none";
        square.style.display = "block";
        counter.style.display = "block";
    }

    function reset_screen() {
        square.style.display = "none";
        counter.style.display = "none";
        startScreen.style.display = "flex";
        startSquare.style.display = "block";
        score.style.display = "block";

        if (counter_clicks != 0) {
            add_previous_score();
        }
    }

    function add_previous_score() {
        score.innerHTML = `Previous Score: ${counter_clicks}`;
    }

    function start30Seconds() {
        timer = setTimeout(reset_screen, 30000);
    }

    // what to do when the previous duration is very long, and then the square is clicked almost
    // immediately? it rubberbands the square for a second and then returns to the first position
    // as if it wasn't clicked at all.
    function newSquareLocation(x, y, delay) {
        anime({
            targets: '#square',
            translateX: x,
            translateY: y,
            rotate: '1turn',
            backgroundColor: randomColor,
            duration: delay * .85
        });
    }

}
