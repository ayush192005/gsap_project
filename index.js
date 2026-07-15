function pageAnimation(){
    var tl = gsap.timeline();

tl.from(".logo, .titles, .titles button", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    stagger: 0.15,
})

tl.from(".centerPart1 h1", {
    x: -100,
    duration: 0.4,
    delay: 0.1,
    opacity: 0,
})
tl.from(".centerPart1 p", {
    x: -100,
    duration: 0.4,
    delay: 0.1,
    opacity: 0,
})

tl.from(".centerPart1 button", {
    x: -100,
    duration: 0.3,
    delay: 0.1,
    opacity: 0,
})

tl.from(".centerPart2 img", {
    x:200,
    opacity: 0,
    duration: 0.5,
}, "-=0.7")

tl.from(".sectionbottom img",{
    y:30,
    opacity:0,
    duration:0.3,
    stagger:0.15,

})
}

// pageAnimation();

var tl = timeline({
    scrollTrigger
})
