export const developerProfile = {
    profilePhoto: [],
    completeName: "Angel Leonardo",
    surnames: "Vera Soto",
    age: 18,
    developerRoles: ["Desarrollador Web / Programador Front-End"],
    softSkills: ['Energetico', 'Amable', 'Analítico'],
    technicalSkills: new Map(),
    socialMediaLinks: []
}

developerProfile.technicalSkills.set('HTML', '<i class="fa-brands fa-html5"></i>')
developerProfile.technicalSkills.set('CSS', '<i class="fa-brands fa-css3-alt"></i>')
developerProfile.technicalSkills.set('JavaScript', '<i class="fa-brands fa-js"></i>')
developerProfile.technicalSkills.set('Terminal / CMD', '<i class="fa-solid fa-terminal"></i>')
developerProfile.technicalSkills.set('Git', '<i class="fa-brands fa-git-alt"></i>')
developerProfile.technicalSkills.set('GitHub', '<i class="fa-brands fa-github"></i>')
developerProfile.technicalSkills.set('SASS', '<i class="fa-brands fa-sass"></i>')
developerProfile.technicalSkills.set('React JS', '<i class="fa-brands fa-react"></i>')

class webProject {
    constructor(footage, titleName, infoDescription, techsUsed, completionTime, projectRepository, projectHyperlink, isBestProject, infoModule) {
        this.footage = footage
        this.titleName = titleName
        this.infoDescription = infoDescription
        this.techsUsed = techsUsed
        this.completionTime = completionTime
        this.projectRepository = projectRepository
        this.projectHyperlink = projectHyperlink
        this.isBestProject = isBestProject
        this.infoModule = infoModule
    }
}

const PROJECT_ONE = new webProject(
    [
        'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
        'A'
    ],
    'Dummie',
    'Este proyecto va de una taza de café... Café.',
    [
        'HTML', 
        'CSS', 
        'JavaScript'
    ],
    'Infinite months',
    'https://youtube.com',
    'https://youtube.com',
    true
    )

    const PROJECT_TWO = new webProject(
        [
            'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ',
            'A', 
            'B'
        ],
        'Dummie 2',
        'Este proyecto va de un lindo perrito, woof woof.',
        [
            'HTML',
            'CSS',
            'JavaScript', 
            'Git', 
            'GitHub'
        ],
        'Few months',
        'https://youtube.com',
        'https://youtube.com',
        false
        )

export let webProjectsList = [PROJECT_ONE, PROJECT_TWO]
