const zIntro = document.querySelector(".z-intro");

const load = () => {
    zIntro.classList.add('intro-transition');
    zIntro.children[0].classList.add("intro-zt-transition");
}

const deload = () => {
    zIntro.classList.remove("intro-transition");
    zIntro.children[0].classList.remove("intro-zt-transition");
}

const loop = () => {
    zIntro.classList.add('intro-transition');
    zIntro.children[0].classList.add("intro-zt-transition");

    setTimeout(() => {

        zIntro.classList.remove("intro-transition");
        zIntro.children[0].classList.remove("intro-zt-transition");

    }, 650)
}


const button = (btnNum) => {
    if (btnNum === 1) {
        console.log("test")
        loop();
    }
    else if (btnNum === 2) {
        load();
    }
    else if (btnNum === 3) {
        deload();
    }
}