import { webProjectsList } from './projects_db.js'
import { developerProfile } from './dev_db.js'


let projectElectionMenuNode = document.querySelector('.pl_menu'),
    electionMenuOptionNode = document.createElement('li'),
    optionNodeInnerButton = document.createElement('button'),
    projectSpecsContainer = document.querySelector('.project_specs_container'),
    electionMenuOptionNodeCopy

electionMenuOptionNode.classList.add('pl_menu_opt')

optionNodeInnerButton.classList.add('opt_button')

electionMenuOptionNode.appendChild(optionNodeInnerButton)

projectSpecsContainer.style.display = 'none'

let projectInformation = {
    mediaView: document.querySelector('.mv_container'),
    titleName: document.querySelector('.project_name'),
    information: document.querySelector('.project_desc > p'),
    techStack: document.querySelector('.techs_used'),
    investedHours: document.querySelector('.completion_time'),
    githubURL: document.querySelector('#gh-href'),
    pageURL: document.querySelector('#prj-href')
}

const setProjectsElections = () => {
    webProjectsList.forEach((project, pIndex) => {
        electionMenuOptionNodeCopy = electionMenuOptionNode.cloneNode(true)
        electionMenuOptionNodeCopy.id = pIndex
        projectElectionMenuNode.appendChild(electionMenuOptionNodeCopy)
    })
}

setProjectsElections()

let mediaOption = document.createElement('li'), mediaOptionButton = document.createElement('button'), mediaOptionNodeCopy
mediaOption.classList.add('media_el')
mediaOptionButton.classList.add('media_el__opt_button')
mediaOption.appendChild(mediaOptionButton)

let imagesList = [], sourceImages,
    imageSelection = document.querySelector('.project_media_list'),
    techInStack = document.createElement('li'), techNodeCopy,
    imageView = document.getElementById('footage-view')
    imageView.style.display = 'none'


document.addEventListener("click", e => {
    if (e.target.matches('.opt_button')) {
        document.querySelector('.mv_container__img_container').style.opacity = '0'
        
        imageView.style.display = 'none'
        imageView.src = ""
        imageSelection.innerHTML = ``
        imagesList = []
        let triggerPointer = e.target.closest('li').id        

        projectSpecsContainer.style.display = 'initial'

        sourceImages = webProjectsList[triggerPointer].footage
        

        for (let index = 0; index < sourceImages.length; index++) {
            mediaOption.setAttribute('data-image-source', sourceImages[index])

            mediaOptionNodeCopy = mediaOption.cloneNode(true)
            imagesList.push(mediaOptionNodeCopy)

        }
 

        for (let index = 0; index < imagesList.length; index++) {
            mediaOptionNodeCopy = mediaOption.cloneNode(true)
            mediaOptionNodeCopy.setAttribute('data-image-source', imagesList[index].dataset.imageSource)
            imageSelection.appendChild(mediaOptionNodeCopy)  

        }

        projectInformation.titleName.textContent = webProjectsList[triggerPointer].titleName
        projectInformation.information.textContent = webProjectsList[triggerPointer].infoDescription
        projectInformation.investedHours.textContent = webProjectsList[triggerPointer].completionTime
        projectInformation.githubURL.href = webProjectsList[triggerPointer].projectRepository
        projectInformation.pageURL.href = webProjectsList[triggerPointer].projectHyperlink

        techInStack.classList.add('techs_used__tech')
        projectInformation.techStack.innerHTML = ``

        webProjectsList[triggerPointer].techsUsed.forEach(tech => {
            techNodeCopy = techInStack.cloneNode()
            techNodeCopy.innerHTML = developerProfile.technicalSkills.get(tech)
            projectInformation.techStack.appendChild(techNodeCopy)
        })
    }

    if (e.target.matches('.media_el__opt_button')) {
        let triggerPointer = e.target.closest('li')
        imageView.style.display = 'initial'
        document.querySelector('.mv_container__img_container').style.opacity = '1'
        imageView.src = triggerPointer.dataset.imageSource
    }
})