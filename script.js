//1.smooth scrolling-
//locomotive js-attack loco scroll cs
//attach loco scroll min js
//add some code from loco github for js
//2.gsap
//attach gsap
//scroll trigger
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
function firstPageAnim(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:"-10",
        opacity:0,
        duration:1.5,
        
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        duration:2,
        ease:Expo.easeInOut,
        delay:-1,
        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
}
function circleChapta(){
    //define default scale value
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        //if the diff is less than 0.8 then we will bring it to 0.8 and if the diff is more than 1.2 we will bring it down to 1.2-this process is known as clamp ,this function is availabe in gsap!!! Go to gsap utils nowwww
        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;
        
        xscale=gsap.utils.clamp(0.8,1.2,xdiff);
        yscale=gsap.utils.clamp(0.8,1.2,ydiff);
        xprev=dets.clientX;
        yprev=dets.clientY;
        circleMouseFollower(xscale,yscale);
    }); 
}
//for image part select the elements then apply mousemove on that element and then get details of its movement ie,get to know x and y position and show image on that position and move it while moving it rotate it too. images should move as fast as the mouse is moving.
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });

})





circleChapta();
circleMouseFollower();
firstPageAnim();