//import developerProfile from "./app_about-me";

let introductionExplanations = [1,2,3,4,5],
    explainationContainer = document.querySelector('.header_content__txt_vignets'),
    explainationSelectionMenu = document.querySelector('.header_content__stage_dotts'),
    explainationOption = document.querySelector('.header_content__stage_dotts__dott'),
    optionButtonCopy = undefined

for (let index = 1; index < introductionExplanations.length; index++) {
        optionButtonCopy = explainationOption.cloneNode(true)
        optionButtonCopy.id = index
        explainationSelectionMenu.appendChild(optionButtonCopy)
}
