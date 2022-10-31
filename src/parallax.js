class Parallax {
    constructor (parallaxContainer, layers){
        this.parallaxContainer = parallaxContainer;
        this.layers = layers;

        this.positionXProcent = 0;
        this.positionYProcent = 0;

        this.#checkContainer();
    }

    #checkContainer (){
        if (this.parallaxContainer){
            this.#mouseEvent();
        } else {
            throw new Error('Не найден parallax контейнер');
        }
    }

    #mouseEvent (){
        document.addEventListener('mousemove', ((e) => {
            const parallaxContainerWidth = this.parallaxContainer.offsetWidth;
            const parallaxContainerHeight = this.parallaxContainer.offsetHeight;

            const positionX = e.pageX - parallaxContainerWidth / 2;
            const positionY = e.pageY - parallaxContainerHeight / 2;
            
            this.positionXProcent = positionX / parallaxContainerWidth * 100;
            this.positionYProcent = positionY / parallaxContainerHeight * 100;
        }))
    }

    parallax (){
        for (let layer in this.layers){
            this.layers[layer].el.style.cssText = `transform: translate(
                ${(this.positionXProcent * (this.layers[layer].factor || 1)) / 100}%,
                ${(this.positionYProcent * (this.layers[layer].factor || 1)) / 100}%
            )`;
        }
        requestAnimationFrame(this.parallax.bind(this));
    }
}