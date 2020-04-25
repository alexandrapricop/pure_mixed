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