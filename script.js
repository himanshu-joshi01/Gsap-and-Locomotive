// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// gsap.to(".main",{
//     x:1350,
//     rotate:360,
//     duration :3,
//     delay:1
// })
// gsap.from(".box1",{
//     x:1350,
//     rotate:360,
//     duration :3,
//     scale:0.5,
//     delay:1
// })

// var t1=gsap.timeline();
// t1.to(".box1",{
//     x:1350,
//     rotate:360,
//     duration:2,
//     scale:0.5,
//     delay:2
// })
// t1.from(".box1",{
//     x:1350,
//     rotate:360,
//     duration :2,
//     scale:0.5,
// })

var t1 = gsap.timeline();

const hero = () => {

  t1.from(".nav h3", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: 1,
  });

  t1.from(".hero h1:nth-child(1)", {
    x: -500,
    opacity: 0,
    duration: 1.5,
    stagger: 1,
  });
  t1.from(".hero h1:nth-child(2)", {
    x: -500,
    opacity: 0,
    duration: 1.5,
    stagger: 1,
  });
  t1.from(".hero h1:nth-child(3)", {
    x: -500,
    opacity: 0,
    duration: 1.5,
    stagger: 1,
  });

  t1.from(".img3", {
    x: 100,
    opacity: 0,
    rotate: 45,
    duration: 0.6,
    stagger: 0.5,
  });
  t1.from(".img2", {
    x: 100,
    opacity: 0,
    rotate: 45,
    duration: 0.6,
    stagger: 0.5,
  });
  t1.from(".img1", {
    x: 100,
    opacity: 0,
    rotate: 45,
    duration: 0.6,
    stagger: 0.5,
  });
};


var t2=gsap.timeline();
const page1234 = () => {
  t2.to("#page1 .circle1", {
    x: 1000,
    rotate: 360,
    scale:.5,
    opacity: 1,
    stagger:.5,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      start: "top 40%",
      end: "top -60%",
      scrub: 5,

    },
  });
  t2.to("#page1 .circle2", {
    x: 960,
    rotate: 360,
    scale:.9,
    opacity: 1,
    stagger:1,
    delay:2,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      start: "top 50%",
      end: "top -50%",
      scrub: 5,

    },
  });
  t2.to("#page1 .circle3", {
    x: 1000,
    rotate: 360,
    scale:1.5,
    opacity: 1,
    stagger:.5,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      start: "top 60%",
      end: "top -40%",
      scrub: 5,

    },
  });

  t1.to("#page2 .circle", {
    x: -1200,
    rotate: 1440,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 50%",
      end: "top -50%",
      scrub: 5,

    },
  });
  t1.to("#page3 .circle", {
    rotate: 2880,
    scrollTrigger: {
      trigger: "#page3 ",
      scroller: "body",
      start: "top 50%",
      end: "top -50%",
      scrub: 5,
    
    },
  });
  t1.to("#page4 .circle", {
    x: 1200,
    backgroundColor:"black",
    scale: 0.2,
    rotate: 720,
    scrollTrigger: {
      trigger: "#page4 ",
      scroller: "body",
      start: "top 50%",
      end: "top -50%",

      scrub: 5,
    },
  });
};



const page5 = () => {
  var allH1 = document.querySelectorAll("#page5 h1");
  allH1.forEach((elem) => {
    var clutter = "";
    var text = elem.textContent.split("");

    text.forEach((char) => {
      clutter += `<span>${char}</span>`;
    });
    elem.innerHTML = clutter;
    console.log(elem.innerHTML);
  });

  gsap.to("#page5 h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page5 h1",
      scroller: "body",
      start: "top 60%",
      end: "top -10%",
      scrub: 2,
    },
  });
};



const page6 = () => {
  gsap.to("#page6 h1", {
    transform: "translateX(-62%)",
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      start: "top 0%",
      end: "top -150%",
      scrub: 5,
      pin: true,
    },
  });
};



hero();
page1234();
page5();
page6();
