window.onload = ()=> {

    let square = document.getElementById("square")

    let startTime, endTime, timeDiff;
    let initTimer = true;

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

       // while (!far_enough_away) {
            bounded_randx = Math.floor(Math.random() * (window.screen.width-100)) + 100;
            bounded_randy = Math.floor(Math.random() * (window.screen.height-100)) + 100;

            // if (bounded_randx < current_x) {
            //     bounded_randx *= -1
            // }

            // if (bounded_randy < current_y) {
            //     bounded_randy *= -1
            // }

            // if ((bounded_randx > 100 && bounded_randx < (window.screen.width - 100))
            //     && (bounded_randy > 100 && bounded_randy < (window.screen.height - 100))) {
            
            //         far_enough_away = true
            // }

            
       // }

        // console.log(bounded_randx);
        // console.log(bounded_randy);
        console.log(timeDiff);

        if (timeDiff > 5000) {
            timeDiff = 5750
        }

        anime({
            targets: '#square',
            translateX: bounded_randx,
            translateY: bounded_randy,
            rotate: '1turn',
            backgroundColor: randomColor,
            duration: timeDiff * .85
        });



    })

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

}
