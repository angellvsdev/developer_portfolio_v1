import { webProjectsList } from "./projects_db.js";
import { developerProfile } from "./dev_db.js";

let introductionExplanations = [
    "¡Epa! Un placer, mi nombre es Angel, y actualmente soy Programador Web y Desarrollador Front-End con 3 años de experiencia, actualmente tengo 18 años, y la idea de trabajar en equipos, cumplir contratos, servir como Freelance y todo lo que tenga que ver con solucionar un problema y crear una aplicación web de calidad me fascina. Soy oriundo de Venezuela, más precisamente de la región del Zulia.",
    "Mis intereses como programador es encaminarme a ser un Ingeniero de Software en algún futuro, y mi objetivo actual; convertirme en un Desarrollador FullStack. También siento un gran interés por el Cloud Computing, la Ciberseguridad y la Electrónica, por lo que en algún futuro espero muy cercano, me veo trabajando en estos campos.",
    "Actualmente me encuentro cursando la carrera de Ingeniería de Sistemas en el Instituto Universitario Politécnico Santiago Mariño, también, estoy aprendiendo React JS y TypeScript a profundidad para seguirme perfeccionando como un Desarrollador Front-End, más allá de lo típico y de las tendencias actuales, busco y trabajo también por entender la raíz de todo, y poder ser una parte activa de la comunidad. Mi misión es jamás dejar de aprender, y siempre mejorar, por encima de todo.",
    "Personalmente, veo el conocimiento y la experiencia como las raíces de un arbol (ya, de ahí que este portafolio parezca página de farmaceutica 🗿) y los frutos, como aquello que creamos a partir de ello. La idea de ser un arbol torcido no me gusta.",
    "Estaré publicando proyectos que demuestren que soy capaz de hacer muy próximamente, entonces bien, te invito cordialmente a que descubras que frutos salen del arbol que llevo un tiempo sembrando, mira y toca lo que quieras y mira más de mí si lo deseas en mi sección 'Sobre Mí'. Un saludo, te veo en el proyecto."
],
    explainationContainer = document.querySelector('.header_content__txt_vignets'),
    explainationSelectionMenu = document.querySelector('.header_content__stage_dotts'),
    explainationOption = document.querySelector('.header_content__stage_dotts__dott'),
    profileImage = document.getElementById('prf-img'),
    optionButtonCopy

profileImage.src = developerProfile.profilePhoto[0]
explainationContainer.textContent = introductionExplanations[0]

    
for (let index = 1; index < introductionExplanations.length; index++) {
        optionButtonCopy = explainationOption.cloneNode(true)
        optionButtonCopy.id = index
        explainationSelectionMenu.appendChild(optionButtonCopy)
}

let intervalIndex = 1,
    stageOptions = document.querySelectorAll('.header_content__stage_dotts__dott')

stageOptions[0].style.background = '#110800'

setInterval(() => {
    if (intervalIndex < introductionExplanations.length) {
        let pastOption = intervalIndex - 1

        stageOptions[stageOptions.length - 1].style.background = 'none'
        stageOptions[intervalIndex].style.background = '#110800'

        explainationContainer.textContent = introductionExplanations[intervalIndex]

        intervalIndex++

        if (pastOption >= 0) {
            stageOptions[pastOption].style.background = 'none'
        }
    }
    else {
        intervalIndex = 0
    }
}, 10000);

let stellarProjectContainer = {
    projectFace: document.querySelector(".container__photo"),
    projectName: document.querySelector(".project_data__name"),
    shortProjectDescription: document.querySelector(".project_data__description"),
    projectHref: document.querySelector('.project_data__view_more_opt'),
    projectTechStack: document.querySelector(".project_data__used_tech_stack")
}

if (webProjectsList.length === 0) {
    document.querySelector('.fav_project_presentation').style.display = 'none'   
    document.querySelector('.landing_menu__option:nth-child(2)').style.display = 'none'
}
else {    
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
}

let contactForm = {
    fatherContainer: document.getElementById('contact-form'),
    formUsername: document.getElementById('org-name'),
    formUserEmail: document.getElementById('org-email'),
    formUserNumber: document.getElementById('org-number'),
    formContent: document.getElementById('org-message'),
}

const emailFormValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.formUserEmail.value)
const phoneNumberFormValidation = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(contactForm.formUserNumber.value)

document.addEventListener('submit', e => {
    if (e.target.matches('#contact-form')) {
        e.preventDefault()

        if (contactForm.formUsername.value.length > 100 || contactForm.formUsername.value.length <= 0 || typeof contactForm.formUserNumber.value !== 'string') {
            alert('Formato nombre invalido.')
        }
        else if (contactForm.formUserEmail.value.length > 100 || emailFormValidation || typeof contactForm.formUserEmail.value !== 'string' || contactForm.formUserEmail.value.length <= 0) {
            alert('Formato correo invalido.')
        }
        else if (phoneNumberFormValidation || contactForm.formUserNumber.value.length < 10 || contactForm.formUserNumber.value.length > 11) {
            alert('Formato telefono invalido.')
        }
        else if (contactForm.formContent.value.length <= 0) {
            alert('Mensaje vacío')
        }
        else {
            e.target.submit()
        }
    }
}) 