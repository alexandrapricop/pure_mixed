const navigationButton = document.getElementById("nav-button");
const topLine = document.getElementById("line_1");
const bottomLine = document.getElementById("line_2");
const navigationContent = document.getElementById("nav-cont");

navigationButton.addEventListener("click", () => {

    if(topLine.classList.contains("line_1_animation_1")){
        topLine.classList.add("line_1_animation_2");
        bottomLine.classList.add("line_2_animation_2");
        topLine.classList.remove("line_1_animation_1");
        bottomLine.classList.remove("line_2_animation_1");
    }else if(topLine.classList.contains("line_1_animation_2")){
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

const  slidesBtnLeft = document.getElementById("slides-btn-left");
const  slidesBtnRight = document.getElementById("slides-btn-right");


accesSlideOne.addEventListener("click", 
    () => {  

        slidesArray.forEach( slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach( accesor => {
            accesor.classList.remove('active');
        })

        accesSlideOne.classList.add('active');
        slideOne.classList.remove("hide_slide");
        slideOne.classList.add("show_slide");
});

accesSlideTwo.addEventListener("click", 
    () => {  

        slidesArray.forEach( slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach( accesor => {
            accesor.classList.remove('active');
        })

        accesSlideTwo.classList.add('active');
        slideTwo.classList.remove("hide_slide");
        slideTwo.classList.add("show_slide");
});

accesSlideThree.addEventListener("click", 
    () => {  

        slidesArray.forEach( slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach( accesor => {
            accesor.classList.remove('active');
        })

        accesSlideThree.classList.add('active');
        slideThree.classList.remove("hide_slide");
        slideThree.classList.add("show_slide");
});

accesSlideFour.addEventListener("click", 
    () => {  

        slidesArray.forEach( slide => {
            slide.classList.add("hide_slide");
            slide.classList.remove("show_slide");
        })

        slidesAccesors.forEach( accesor => {
            accesor.classList.remove('active');
        })

        accesSlideFour.classList.add('active');
        slideFour.classList.remove("hide_slide");
        slideFour.classList.add("show_slide");
});


slidesBtnRight.addEventListener("click", () => {

        for( index = 0 ; index < slidesArray.length ; index++){

        if(!slidesArray[index].classList.contains("hide_slide")){
            if(index == slidesArray.length-1){
                slidesArray[index].classList.remove("show_slide");
                slidesArray[index].classList.add("hide_slide");
                slidesArray[0].classList.remove("hide_slide");
                slidesArray[0].classList.add("show_slide");
                slidesAccesors[index].classList.remove("active");
                slidesAccesors[0].classList.add("active");
            }else {
                slidesArray[index].classList.remove("show_slide");
                slidesArray[index].classList.add("hide_slide");
                slidesArray[index+1].classList.remove("hide_slide");
                slidesArray[index+1].classList.add("show_slide");
                slidesAccesors[index].classList.remove("active");
                slidesAccesors[index+1].classList.add("active");
                index=slidesArray.length;
            }
        }
    }
})

slidesBtnLeft.addEventListener("click", () => {

    for( index = 0 ; index < slidesArray.length ; index++){

    if(!slidesArray[index].classList.contains("hide_slide")){
        if(index == 0){
            slidesArray[index].classList.remove("show_slide");
            slidesArray[index].classList.add("hide_slide");
            slidesArray[slidesArray.length-1].classList.remove("hide_slide");
            slidesArray[slidesArray.length-1].classList.add("show_slide");
            slidesAccesors[index].classList.remove("active");
            slidesAccesors[slidesArray.length-1].classList.add("active");
            index=slidesArray.length;
        }else {
            slidesArray[index].classList.remove("show_slide");
            slidesArray[index].classList.add("hide_slide");
            slidesArray[index-1].classList.remove("hide_slide");
            slidesArray[index-1].classList.add("show_slide");
            slidesAccesors[index].classList.remove("active");
            slidesAccesors[index-1].classList.add("active");
        }
    }
}
})






















/*
const productsSliderImagesUrlsArray = 
    [{''},'./media/images/product_recover.png','./media/images/product_tone.png',
    './media/images/product_health.png','./media/images/product_recover.png','./media/images/product_tone.png'];


const obejct =  {
        productImageUrl: "./media/images/product_health.png",
        productImageAlt: "product the health protein in blue bag",
        productImageClass:"prod-img",
        productName: "PURE GAINER",
        productPrice: "200 RON",
        productRating: "./media/icons/rating_icon.png",
        productRatingAlt: "5 stars rating for product the health protein"
};


<div class="product">
<img  alt="product tone capsules" class="prod-img" src="./media/images/product_tone.png"  />
<div class="prod-desc flex">
    <span>PURE FIT</span>
    <span>200 RON</span>
    <img  alt="5 stars rating for product tone capsules" class="prod-rate" src="./media/icons/rating_icon.png"  />
</div>
</div>


<div class="product hide2">
<img   alt="product the health protein in blue bag" class="prod-img" src="./media/images/product_health.png" />
<div class="prod-desc flex">
    <span>PURE GAINER</span>
    <span>200 RON</span>
    <img  alt="5 stars rating for product the health protein" class="prod-rate" src="./media/icons/rating_icon.png"  />
</div>
</div>


<div class="product hide1">
<img  alt="product the recover capsules" class="prod-img" src="./media/images/product_recover.png"  />
<div class="prod-desc flex">
    <span>PURE WHEY MASS</span>
    <span>200 RON</span>
    <img  alt="5 stars rating for product the recover capsules" class="prod-rate" src="./media/icons/rating_icon.png" />
</div>
</div>


*/