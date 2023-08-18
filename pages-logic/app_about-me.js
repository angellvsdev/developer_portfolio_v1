import { developerProfile } from "./app_db.js";

let generalProfileSection = {
    profilePhoto: document.getElementById('prf-img'),
    completeName: document.querySelector('.dev__name'),
    roleTitle: document.querySelector('.dev__plate'),
    aboutMeDescription: document.querySelector('.data__dev_description'),
    personalInstagram: document.getElementById('instagram-page'),
    personalGitHub: document.getElementById('github-page'),
    personalLinkedin: document.getElementById('linkedin-page')
}

const setProfileSectionInformation = () => {
    generalProfileSection.profilePhoto.src = developerProfile.profilePhoto[1]
    generalProfileSection.completeName.textContent = `${developerProfile.completeName} ${developerProfile.surnames}`
    generalProfileSection.roleTitle.textContent = developerProfile.developerRoles[0]
    generalProfileSection.personalInstagram.href = developerProfile.socialMediaLinks[0]
    generalProfileSection.personalGitHub.href = developerProfile.socialMediaLinks[1]
    generalProfileSection.personalLinkedin.href = developerProfile.socialMediaLinks[2]

}

setProfileSectionInformation()

let technicalSkillsSection = document.querySelector('.technical_skills__list'), sectionElement = document.createElement('li'), sectionElementNodeCopy
    sectionElement.classList.add('list__element')

const insertTechElementsIn = () => {
    let techStackMap = developerProfile.technicalSkills

    for (let [pointer, value] of techStackMap) {
        sectionElementNodeCopy = sectionElement.cloneNode(true)

        sectionElementNodeCopy.innerHTML = value + ' ' + pointer

        technicalSkillsSection.appendChild(sectionElementNodeCopy)
    }

}

insertTechElementsIn()

let softSkillsSection = document.querySelector('.soft_skills__list')

const insertSoftSkillsElementsIn = () => {
    let softSkillsList = developerProfile.softSkills

    softSkillsList.forEach(skill => {
        sectionElementNodeCopy = sectionElement.cloneNode(true)

        sectionElementNodeCopy.textContent = skill

        softSkillsSection.appendChild(sectionElementNodeCopy)

    })
}

insertSoftSkillsElementsIn()