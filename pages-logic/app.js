import { webProjectsList } from "./app_about-me.js";
import { developerProfile } from "./app_about-me.js";

let introductionExplanations = [1,2,3,4,5],
    explainationContainer = document.querySelector('.header_content__txt_vignets'),
    explainationSelectionMenu = document.querySelector('.header_content__stage_dotts'),
    explainationOption = document.querySelector('.header_content__stage_dotts__dott'),
    optionButtonCopy

for (let index = 1; index < introductionExplanations.length; index++) {
        optionButtonCopy = explainationOption.cloneNode(true)
        optionButtonCopy.id = index
        explainationSelectionMenu.appendChild(optionButtonCopy)
}

const allVignetButtons = document.querySelector(".header_content__stage_dotts_dott")

let intervalIndex = 0
let stageOptions = document.querySelectorAll('.header_content__stage_dotts__dott')


// document.addEventListener('click', (e) => {
//     if (e.target.matches(".header_content__stage_dotts__dott")) {
//         intervalIndex = e.target.id
//         explainationContainer.textContent = introductionExplanations[e.target.id]
//     }
// })

setInterval(() => {
    if (intervalIndex < introductionExplanations.length) {
        let pastOption = intervalIndex - 1

        stageOptions[stageOptions.length - 1].style.background = 'none'
        stageOptions[intervalIndex].style.background = '#110800'

        explainationContainer.textContent = introductionExplanations[intervalIndex]

        intervalIndex++

        stageOptions[pastOption].style.background = 'none'
    }
    else {
        intervalIndex = 0
    }
}, 2000);

console.log(webProjectsList)

let stellarProjectContainer = {
    projectFace: document.querySelector(".container__photo"),
    projectName: document.querySelector(".project_data__name"),
    shortProjectDescription: document.querySelector(".project_data__description"),
    projectHref: document.querySelector('.project_data__view_more_opt'),
    projectTechStack: document.querySelector(".project_data__used_tech_stack")
}

const showBestProject = () => {
    webProjectsList.forEach(project => {
        if (project.isBestProject) {
            stellarProjectContainer.projectFace.src = project.footage[0]
            stellarProjectContainer.projectName.textContent = project.titleName
            stellarProjectContainer.shortProjectDescription.textContent = project.infoDescription
            stellarProjectContainer.projectHref.href = project.infoModule
            
            let techInStack = document.createElement('li'), techNodeCopy
            techInStack.classList.add('used_tech_stack__icon_el')

            project.techsUsed.forEach(tech => {
                techNodeCopy = techInStack.cloneNode()
                techNodeCopy.innerHTML = developerProfile.technicalSkills.get(tech)
                stellarProjectContainer.projectTechStack.appendChild(techNodeCopy)
            })
        }
    })
}

showBestProject()