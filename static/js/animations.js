// Intersection Observer to trigger animations as the page scrolls

// let options = {
//     // element to use as viewport. Use browser viewport if ull
//     root: null,
//     rootMargin: '0px',
//     //percentage of element in viewport before triggering callback
//     threshold: 0.5
// }

// let observer = new IntersectionObserver(cb, opt)
// let target = document.querySelector('.animated')
// observer.observe(target);

// let cb = (entires, observer) => {
//     entires.forEach(entry => {
//         if(entry.isIntersecting) {
//             target.classList.add("animate__animated", "animate__slideInRight")
//         }
//     })
// }


const ANIMATED_ELEMENT = '.animated'
const ANIMATED_CLASS = 'animate__animated'
const ANIMATE_ZOOMIN = 'animate__zoomIn'

const isAnimated = element => (
    element.classList.contains(ANIMATED_CLASS)
)

const animate = element => (
    element.classList.add(ANIMATED_CLASS, ANIMATE_ZOOMIN)
)

const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            //add classes or animate things in here
            animate(entry.target);
            
        }
        observer.unobserve(entry.target)
    })
})

const elements = [].filter.call(
    document.querySelectorAll(ANIMATED_ELEMENT),
    element => !isAnimated(element, ANIMATED_CLASS),
)

elements.forEach((element) => intersectionObserver.observe(element));