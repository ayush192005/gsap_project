function pageAnimation() {
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
        x: 200,
        opacity: 0,
        duration: 0.5,
    }, "-=0.7")

    tl.from(".sectionbottom img", {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.15,

    })
}

function page2Animation(){
    var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top -60%",
        scrub:2,
    }
})

t2.from(".service",{
    y:30,
    opacity:0,
    duration:0.5,
})

//___ Line 1____
t2.from(".cards.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim1")

t2.from(".cards.black.line1.right",{
    x:300,
    opacity:0,
    duration:1,
},"anim1")

//___ Line 2____
t2.from(".cards.black.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim2")


t2.from(".cards.line2.right",{
    x:300,
    opacity:0,
    duration:1,
},"anim2")

//___ Line 3____
t2.from(".cards.line3.left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim3")

t2.from(".cards.black.line3.right",{
    x:300,
    opacity:0,
    duration:1,
},"anim3")


}


pageAnimation();
page2Animation();

