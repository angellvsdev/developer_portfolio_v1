import { webProjectsList } from './app_about-me.js'


let projectElectionMenuNode = document.querySelector('.pl_menu'),
    electionMenuOptionNode = document.createElement('li'),
    optionNodeInnerButton = document.createElement('button'),
    electionMenuOptionNodeCopy

electionMenuOptionNode.classList.add('pl_menu_opt')
optionNodeInnerButton.classList.add('opt_button')
electionMenuOptionNode.appendChild(optionNodeInnerButton)

let projectInformation = {
    mediaView: document.querySelector('.project_media_list'),
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

const setProjectMediaSelection = () => {

}

const setProjectInformationSections = () => {}

let mediaOption = document.createElement('li'), mediaOptionButton = document.createElement('button'), mediaOptionNodeCopy
mediaOption.classList.add('media_el')
mediaOptionButton.classList.add('media_el__opt_button')
mediaOption.appendChild(mediaOptionButton)

let mediaMenuContainer = document.querySelector('.media_menu_container')

let imagesList = [], sourceImages,
    imageSelection = document.querySelector('.project_media_list')

document.addEventListener("click", e => {
    if (e.target.matches('.pl_menu_opt')) {
        imageSelection.innerHTML = ``
        imagesList = []

        sourceImages = webProjectsList[e.target.id].footage
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
    }
})

        
// let loadProjectMedia = e.target.id

// projectInformation.mediaView = webProjectsList[e.target.id].footage.forEach(mediaEl => {

//     if (e.target.id !== mediaMenuContainer.id) {

//         webProjectsList[e.target.id].footage.forEach(media => {

//             mediaOptionNodeCopy = mediaOption.cloneNode(true)
//             projectInformation.mediaView.appendChild(mediaOptionNodeCopy)
//         })

//         mediaMenuContainer.id = e.target.id
//     }
// })

// imagesList.forEach(image => {
        //     mediaOptionNodeCopy = mediaOption.cloneNode(true)
        //     mediaOptionNodeCopy.setAttribute('data-image-source', image.dataset.imageSource)
        //     imageSelection.appendChild(mediaOptionNodeCopy)  
        // })

        
        // sourceImages.forEach(image => {

        //     mediaOption.setAttribute('data-image-source', image)

        //     console.log(imagesList.push(mediaOption))
        //     console.log(imagesList)
        // })