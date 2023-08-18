import { webProjectsList } from './app_db.js'
import { developerProfile } from './app_db.js'


let projectElectionMenuNode = document.querySelector('.pl_menu'),
    electionMenuOptionNode = document.createElement('li'),
    optionNodeInnerButton = document.createElement('button'),
    electionMenuOptionNodeCopy

electionMenuOptionNode.classList.add('pl_menu_opt')
optionNodeInnerButton.classList.add('opt_button')
electionMenuOptionNode.appendChild(optionNodeInnerButton)

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

let mediaMenuContainer = document.querySelector('.media_menu_container')

let imagesList = [], sourceImages,
    imageSelection = document.querySelector('.project_media_list'),
    techInStack = document.createElement('li'), techNodeCopy,
    imageView = document.getElementById('footage-view')

document.addEventListener("click", e => {
    if (e.target.matches('.opt_button')) {
        imageView.src = ""
        imageSelection.innerHTML = ``
        imagesList = []
        let triggerPointer = e.target.closest('li').id        

        //console.log(e.target.closest('li'))

        sourceImages = webProjectsList[triggerPointer].footage
        //console.log(sourceImages)


        for (let index = 0; index < sourceImages.length; index++) {
            //console.log(sourceImages)
            
            mediaOption.setAttribute('data-image-source', sourceImages[index])

            mediaOptionNodeCopy = mediaOption.cloneNode(true)
            imagesList.push(mediaOptionNodeCopy)
            //console.log(imagesList)
        }

        //console.log(imagesList) 

        for (let index = 0; index < imagesList.length; index++) {
            mediaOptionNodeCopy = mediaOption.cloneNode(true)
            mediaOptionNodeCopy.setAttribute('data-image-source', imagesList[index].dataset.imageSource)
            imageSelection.appendChild(mediaOptionNodeCopy)  
            //console.log(index)
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
        imageView.src = triggerPointer.dataset.imageSource
    }
})

// let triggerPointer = e.target.closest('li').id  
//         sourceImages = webProjectsList[triggerPointer].footage
//         imageView.src = sourceImages[triggerPointer]
//         imageSelection.innerHTML = ``
//         imagesList = []      
