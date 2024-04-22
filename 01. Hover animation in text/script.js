var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach(frame => {
  frame.addEventListener("mousemove", function (dets) {
    var dims = frame.getBoundingClientRect();
  
    var Xstart = dims.x;
    var Xend = dims.x + dims.width;
  
    var zeroOne = gsap.utils.mapRange(Xstart, Xend, 0, 1, dets.clientX);
  
    gsap.to(circle, {
      scale: 8,
    });
  
    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.4,
      y: "-5vw",
    })
    gsap.to(frame.children, {
      x: lerp(-50, 50, zeroOne),
      duration: .3,
    })
  })
  
  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
      scale: 1,
    });
    gsap.to(frame.children, {
      color: "#000",
      duration: 0.4,
      y: 0,
    });
    gsap.to(frame.children, {
      x: 0,
      duration: 0.3,
    });
  });
});

window.addEventListener("mousemove", function (dets) {
  // console.log(dets.clientX,dets.clientY);
  // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
    ease: Expo,
  });
});



// lerp = intial value , final value ,and third value is b/t - 0 and 1 (last value give your answer)

// clamping = map range one range to another

// right side val = posi and left val = neg



// var circle = document.querySelector("#circle");
// var frames = document.querySelectorAll(".frame");
// const lerp = (x, y, a) => x * (1 - a) + y * a;

// frames.forEach(frame => {
//   frame.addEventListener("mousemove", function (event) {
//     var dims = frame.getBoundingClientRect();
  
//     var Xstart = dims.x;
//     var Xend = dims.x + dims.width;
  
//     var zeroOne = mapRange(Xstart, Xend, 0, 1, event.clientX);
  
//     circle.style.transform = "scale(8)";
  
//     Array.from(frame.children).forEach(child => {
//       child.style.color = "#fff";
//       child.style.transition = "color 0.4s, transform 0.3s";
//       child.style.transform = `translateX(${lerp(-50, 50, zeroOne)}px)`;
//     });
//   });
  
//   frame.addEventListener("mouseleave", function () {
//     circle.style.transform = "scale(1)";
  
//     Array.from(frame.children).forEach(child => {
//       child.style.color = "#000";
//       child.style.transform = "translateX(0)";
//     });
//   });
// });

// window.addEventListener("mousemove", function (event) {
//   circle.style.left = `${event.clientX}px`;
//   circle.style.top = `${event.clientY}px`;
// });

// function mapRange(x, inMin, inMax, outMin, outMax) {
//   return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

