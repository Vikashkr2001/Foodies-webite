
//for scrollbar
let nav = document.querySelector("navigation-wrap");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
} else {
    nav.classList.remove("scroll-on");
}
}


//nav hide when click to any one nav header (coz by default bootstrap is set show class so we remove here)
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector( ".navbar-collapse.collapse" );  //loc29
navBar.forEach(function(e) {
    e.addEventListener('click', function()  {
        navCollapse.classList.remove('show');
})
});


/*RUNNING Number CODE */
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)), // Corrected the step calculation
            timer = setInterval(() => {
                current += increment;
                obj.textContent = parseInt(current);
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    } 
    //All span elements with id that starts with 'counter' , last no is timer in second ex-3000,2500 etc
    counter('count1', 0, 1287, 3000);
    counter('count2', 100, 5786, 2500);
    counter('count3', 0, 1440, 3000);
    counter('count4', 0, 7100, 3000); 
});

