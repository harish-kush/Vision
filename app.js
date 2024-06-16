function init(){
    gsap.registerPlugin(ScrollTrigger);

    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
     
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}
init()

var tl = gsap.timeline()

tl.from("#loader .lv ul li",{
  x:200,
  rotate:360,
  duration:0.5,
  opacity:0,
  stagger:1
})
tl.from("#loader .branch ul li",{
  y:100,
  duration:0.5,
  delay:0.5,
  opacity:0,
  stagger:1
})
tl.to("#loader .lv",{
  y:100,
  opacity:0
})
tl.to("#loader .branch ul li",{
  x:200,
  duration:0.5,
  delay:0.5,
  opacity:0,
  
})
tl.to("#loader",{
  y:-1000,
  opacity:0,
  duration:2,
  display:"none"
  // duration:0.5
})
tl.from("#page1",{
  y:-100,
  opacity:0,
  duration:1
})
tl.from("nav img",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
},"hk")
tl.from("#part2 h4",{
    y:-20,
    duration:0.5,
    // stagger:1,
    opacity:0,
    delay:0.5
},"hk")
tl.from("#page1 .page1-content .firstpart .p1v ul ",{
    x:-1000,
    duration:0.5,
    rotate:90
},"hk")
tl.from("#page1 .page1-content .firstpart .p1branch ul ",{
  x:500,
  duration:0.5,
  rotate:90
})
tl.from("#page1 .page1-content .secondpart h1 ",{
  y:500,
  duration:0.5,
})
tl.to("#page2",{
 backgroundColor:"black",
 color:"white",
 duration:1,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 70%",
    end:"top 60%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page2 .heading",{
  scale:0,
  duration:0.6,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 70%",
    end:"top 60%",
    // markers:true,
    scrub:2
  }
})
tl.to(".au11 img",{
  x:50,
  duration:1,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 50%",
    end:"top 30%",
    // markers:true,
    scrub:2
  }
  
})
tl.to(".au12",{
  x:-10,
  duration:1,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 50%",
    end:"top 30%",
    // markers:true,
    scrub:2
  }
  
})
tl.to("#page2 .p2container .p2b2 .au21",{
  x:10,
  duration:1,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 25%",
    end:"top 0%",
    // markers:true,
    scrub:2
  }
})
tl.to("#page2 .p2container .p2b2 .au22 img",{
  x:-10,
  duration:1,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 25%",
    end:"top 0%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page3 video",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 90%",
    end:"top 70%",
    scrub:2
  }
})
tl.from("#page3 .p3content .heading h2",{
  scale:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 70%",
    end:"top 50%",
    scrub:2
  }
})
tl.from("#page3 .p3content .heading h1",{
  x:100,
  scale:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 70%",
    end:"top 50%",
    scrub:2
  }
})
tl.from("#page3 .p3content .p3p",{
  x:100,
  scale:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 60%",
    end:"top 40%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page3 .p3content ul li",{
  y:-30,
  scale:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 40%",
    end:"top 30%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page4 .p4left .when .wc",{
  x:1000,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 80%",
    end:"top 60%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page4 .p4left .where .wc2",{
  x:-1000,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 40%",
    end:"top 20%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page4 .p4left .timing",{
  y:-1000,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 20%",
    end:"top 10%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page5 .p5heading h1",{
  x:-100,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 80%",
    end:"top 60%",
    // markers:true,
    scrub:2
  }
})
tl.to("#page5",{
  backgroundColor:"black",
  color:"white",
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
        end:"top -100%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page5 .p5top .p5heading1",{
  x:-100,
  y:-100,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 60%",
    end:"top 40%",
    
    // markers:true,
    scrub:2
  }
})
tl.from("#page5 .p5top .image-container",{
  x:-100,
  y:100,
  delay:1,
  opacity:0,
  stagger:1,
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 30%",
    end:"top 20%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page5 .p5bottom .p5heading2",{
  x:-100,
  y:100,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 10%",
    end:"top -100%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page5 .p5bottom .image-container .image-div",{
  x:-100,
  y:100,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    end:"top -80%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page7 .footer p",{
  x:1000,
  delay:1,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 60%",
    end:"top 40%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page7 .footer a",{
  x:-1000,
  delay:1,
  opacity:0,
  duration:3,
  stagger:1,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 40%",
    end:"top 20%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page7 .footer .footer-img img",{
  y:-1000,
  delay:1,
  opacity:0,
  duration:2,
  stagger:1,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 20%",
    end:"top 0%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page7 .footer .contactus",{
  y:1000,
  delay:1,
  opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    // markers:true,
    scrub:2
  }
})
tl.from("#page7 .footer button",{
  y:1000,
  delay:1,
  opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top -20%",
    end:"top -40%",
    // markers:true,
    scrub:2
  }
})




