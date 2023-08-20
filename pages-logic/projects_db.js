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

export let webProjectsList = []