const navigationButton = document.getElementById("nav-button");
const topLine = document.getElementById("line_1");
const bottomLine = document.getElementById("line_2");
const navigationContent = document.getElementById("nav-cont");

navigationButton.addEventListener("click", () => {

    if (topLine.classList.contains("line_1_animation_1")) {
        topLine.classList.add("line_1_animation_2");
        bottomLine.classList.add("line_2_animation_2");
        topLine.classList.remove("line_1_animation_1");
        bottomLine.classList.remove("line_2_animation_1");
    } else if (topLine.classList.contains("line_1_animation_2")) {
        topLine.classList.remove("line_1_animation_2");
        bottomLine.classList.remove("line_2_animation_2");
        topLine.classList.add("line_1_animation_1");
        bottomLine.classList.add("line_2_animation_1");
    } else {
        topLine.classList.add("line_1_animation_1");
        bottomLine.classList.add("line_2_animation_1");
    }

    navigationContent.classList.toggle("hide");

})

const accesSlideOne = document.getElementById("acces_slide1");
const accesSlideTwo = document.getElementById("acces_slide2");
const accesSlideThree = document.getElementById("acces_slide3");
const accesSlideFour = document.getElementById("acces_slide4");
const slidesAccesors = [accesSlideOne, accesSlideTwo, accesSlideThree, accesSlideFour];

const slideOne = document.getElementById("slide1");
const slideTwo = document.getElementById("slide2");
const slideThree = document.getElementById("slide3");
const slideFour = document.getElementById("slide4");
const slidesArray = [slideOne, slideTwo, slideThree, slideFour];

const slidesBtnLeft = document.getElementById("slides-btn-left");
const slidesBtnRight = document.getElementById("slides-btn-right");


accesSlideOne.addEventListener("click",
    () => {

        slidesArray.forEach(slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach(accesor => {
            accesor.classList.remove('active');
        })

        accesSlideOne.classList.add('active');
        slideOne.classList.remove("hide_slide");
        slideOne.classList.add("show_slide");
    });

accesSlideTwo.addEventListener("click",
    () => {

        slidesArray.forEach(slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach(accesor => {
            accesor.classList.remove('active');
        })

        accesSlideTwo.classList.add('active');
        slideTwo.classList.remove("hide_slide");
        slideTwo.classList.add("show_slide");
    });

accesSlideThree.addEventListener("click",
    () => {

        slidesArray.forEach(slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach(accesor => {
            accesor.classList.remove('active');
        })

        accesSlideThree.classList.add('active');
        slideThree.classList.remove("hide_slide");
        slideThree.classList.add("show_slide");
    });

accesSlideFour.addEventListener("click",
    () => {

        slidesArray.forEach(slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach(accesor => {
            accesor.classList.remove('active');
        })

        accesSlideFour.classList.add('active');
        slideFour.classList.remove("hide_slide");
        slideFour.classList.add("show_slide");
    });


slidesBtnRight.addEventListener("click", () => {

    for (index = 0; index < slidesArray.length; index++) {

        if (!slidesArray[index].classList.contains("hide_slide")) {
            if (index == slidesArray.length - 1) {
                slidesArray[index].classList.remove("show_slide");
                slidesArray[index].classList.add("hide_slide");
                slidesArray[0].classList.remove("hide_slide");
                slidesArray[0].classList.add("show_slide");
                slidesAccesors[index].classList.remove("active");
                slidesAccesors[0].classList.add("active");
            } else {
                slidesArray[index].classList.remove("show_slide");
                slidesArray[index].classList.add("hide_slide");
                slidesArray[index + 1].classList.remove("hide_slide");
                slidesArray[index + 1].classList.add("show_slide");
                slidesAccesors[index].classList.remove("active");
                slidesAccesors[index + 1].classList.add("active");
                index = slidesArray.length;
            }
        }
    }
})

slidesBtnLeft.addEventListener("click", () => {

    for (index = 0; index < slidesArray.length; index++) {

        if (!slidesArray[index].classList.contains("hide_slide")) {
            if (index == 0) {
                slidesArray[index].classList.remove("show_slide");
                slidesArray[index].classList.add("hide_slide");
                slidesArray[slidesArray.length - 1].classList.remove("hide_slide");
                slidesArray[slidesArray.length - 1].classList.add("show_slide");
                slidesAccesors[index].classList.remove("active");
                slidesAccesors[slidesArray.length - 1].classList.add("active");
                index = slidesArray.length;
            } else {
                slidesArray[index].classList.remove("show_slide");
                slidesArray[index].classList.add("hide_slide");
                slidesArray[index - 1].classList.remove("hide_slide");
                slidesArray[index - 1].classList.add("show_slide");
                slidesAccesors[index].classList.remove("active");
                slidesAccesors[index - 1].classList.add("active");
            }
        }
    }
})




const productsSlides = Array.from(document.getElementsByClassName("product"));
const productsSlideLeftButton = document.getElementById("products-btn-left");
const productsSlideRightButton = document.getElementById("products-btn-right");

var productsSliderCharacteristics = {
    numberOfProducts: 3,
    firstProductPosition: 0,
    lastProductPosition: 2,
    modifyNumberOfProducts(number) { this.numberOfProducts = number },
    modifyFirstProductsPosition(number) { this.firstProductPosition = number },
    modifyLastProductsPosition() { this.lastProductPosition = this.firstProductPosition + this.numberOfProducts - 1 },
}


var onresize = function () {
    width = window.innerWidth;
    height = window.innerHeight;

    productsSlides.forEach(slide => { slide.classList.add("hide_product") });

    if (width <= 850) {
        productsSliderCharacteristics.modifyNumberOfProducts(1);
        productsSliderCharacteristics.modifyLastProductsPosition();
        console.log(productsSliderCharacteristics)

    } else if (width <= 1000) {
        productsSliderCharacteristics.modifyNumberOfProducts(2);
        if(productsSliderCharacteristics.firstProductPosition + productsSliderCharacteristics.numberOfProducts > productsSlides.length-1){
            
            let overflow = productsSliderCharacteristics.firstProductPosition + productsSliderCharacteristics.numberOfProducts - (productsSlides.length - 1); 
            productsSliderCharacteristics.modifyFirstProductsPosition(productsSliderCharacteristics.firstProductPosition-overflow)
        }
        productsSliderCharacteristics.modifyLastProductsPosition();
    } else if(width >1000) {
        productsSliderCharacteristics.modifyNumberOfProducts(3);
        if(productsSliderCharacteristics.firstProductPosition + productsSliderCharacteristics.numberOfProducts > productsSlides.length-1){
            
            let overflow = productsSliderCharacteristics.firstProductPosition + productsSliderCharacteristics.numberOfProducts - (productsSlides.length - 1); 
            productsSliderCharacteristics.modifyFirstProductsPosition(productsSliderCharacteristics.firstProductPosition-overflow)
        }
        productsSliderCharacteristics.modifyLastProductsPosition();
    }

    for (index = productsSliderCharacteristics.firstProductPosition; index <= productsSliderCharacteristics.lastProductPosition; index++){
        productsSlides[index].classList.remove("hide_product");

    if(index < productsSlides.length -1)
        productsSlideRightButton.classList.remove("inactive")

    if(productsSliderCharacteristics.firstProductPosition > 0)
        productsSlideRightButton.classList.remove("inactive")
}

}

window.addEventListener("resize", onresize);


productsSlideRightButton.addEventListener("click", () => {
    const { firstProductPosition, lastProductPosition, numberOfProducts } = productsSliderCharacteristics;

    if(lastProductPosition + 1< productsSlides.length ){

        productsSlides.forEach(slide => { slide.classList.add("hide_product") });
        productsSlideLeftButton.classList.remove("inactive")

        productsSliderCharacteristics.modifyFirstProductsPosition(firstProductPosition+1);
        productsSliderCharacteristics.modifyLastProductsPosition();

        for(index = productsSliderCharacteristics.firstProductPosition; index <= productsSliderCharacteristics.lastProductPosition; index++)
            productsSlides[index].classList.remove("hide_product");
        
        console.log(firstProductPosition,lastProductPosition)
      

    }
     if(productsSliderCharacteristics.lastProductPosition+1 == productsSlides.length ){
        productsSlideRightButton.classList.add("inactive")
    }

})


productsSlideLeftButton.addEventListener("click", () => {

    if(productsSliderCharacteristics.firstProductPosition  > 0){

        productsSlideRightButton.classList.remove("inactive")
        productsSlides.forEach(slide => { slide.classList.add("hide_product") });

        productsSliderCharacteristics.modifyFirstProductsPosition(productsSliderCharacteristics.firstProductPosition-1);
        productsSliderCharacteristics.modifyLastProductsPosition();

        for(index = productsSliderCharacteristics.firstProductPosition; index <= productsSliderCharacteristics.lastProductPosition; index++)
            productsSlides[index].classList.remove("hide_product");

        
      
    }
     if(productsSliderCharacteristics.firstProductPosition == 0){
         console.log("here");
        productsSlideLeftButton.classList.add("inactive")
    }

})


onresize();




