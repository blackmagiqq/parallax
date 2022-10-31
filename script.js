;(() => {
    window.onload = function (){
        const parallaxContainer = document.querySelector('.parallax');
        const layers = {
            one: {
                el: document.querySelector('.parallax__layer-one'),
                factor: 0.3, // %
            },
            two: {
                el: document.querySelector('.parallax__layer-two'),
                factor: 0.7 // %
            },
            three: {
                el: document.querySelector('.parallax__layer-three'),
                fasctor: 1.2, // %
            }
        };
    
        const parallax = new Parallax(parallaxContainer, layers);
        parallax.parallax();
    }
})()