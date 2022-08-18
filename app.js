const placement = document.getElementById("calendly")
const placementRec = placement.getBoundingClientRect().top;
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }


function scrollToBottom() { 
    window.scrollTo( { 
        top: placementRec,
        left: 0,
        behavior: "smooth"
    })
}





//Check if Element is in view port s
const statsdiv = document.querySelector(".stats-inner-container")
const statsRect = statsdiv.getBoundingClientRect();
const containerR = document.querySelector(".container-right")
const proof_list = document.getElementById("proof")
const proo_rect = containerR.getBoundingClientRect()
isInViewport(proof_list)
document.addEventListener("scroll", () => { 
    if(isInViewport(proof_list)) { 
        console.log(true)
        containerR.classList.add("container-right-translate")
    }
})

const header_span = document.getElementById("line");




function isInViewport(e) {
    const rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const counters = document.querySelectorAll(".counter")


//we call the function once in view port 
// function counterUp() { 
    
//     counters.forEach((counter) => { 
//         counter.innerText = "0"
//         const updateCounter = () =>  { 
//             const target = +counter.getAttribute("data-target")
//             const c = +counter.innerText;
    
//             const increment = target/200;
    
//             if (c < target) { 
//                 counter.innerText = `${Math.ceil(c + increment)}`
//                 setTimeout(updateCounter, 1)
//                 execute = false
//                 return function() {
//                     if(!execute){
//                         execute = false;
//                     }
                  
//                 }
          
//             }
      

            
    
    
//         }
//         updateCounter()

      

    
//     })
// }







// if(isInViewport(statsdiv)) { 
//     updateCounter();
//     counters.forEach((counter) => { 
//         const target = +counter.getAttribute("data-target")
//         const c = +counter.innerText;
        
//         if(c>= target) { 
//            document.removeEventListener('scroll')
//         }


//     })

// }