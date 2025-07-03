import { webProjectsList } from "./projects_db.js";
import { developerProfile } from "./dev_db.js";

let introductionExplanations = [
    "¡Epa! Un placer, mi nombre es Angel, y actualmente soy Programador Web y Desarrollador Front-End con 5 años de experiencia, actualmente tengo 20 años, y la idea de trabajar en equipos, cumplir contratos, servir como Freelance y todo lo que tenga que ver con solucionar un problema y crear una aplicación web de calidad me fascina. Soy oriundo de Venezuela, más precisamente de la región del Zulia.",
    "Mis intereses como programador es encaminarme a ser un Ingeniero de Software en algún futuro, y mi objetivo actual; convertirme en un Desarrollador FullStack. También siento un gran interés por el Cloud Computing, la Ciberseguridad y la Electrónica, por lo que en algún futuro espero muy cercano, me veo trabajando en estos campos.",
    "Actualmente me encuentro cursando la carrera de Ingeniería de Sistemas en el Instituto Universitario Politécnico Santiago Mariño, también, manejo React JS + Next JS y TypeScript a profundidad para seguirme perfeccionando como un Desarrollador Front-End, más allá de lo típico y de las tendencias actuales, busco y trabajo también por entender la raíz de todo, y poder ser una parte activa de la comunidad. Mi misión es jamás dejar de aprender, y siempre mejorar, por encima de todo.",
    "Personalmente, veo el conocimiento y la experiencia como las raíces de un arbol, y los frutos, como aquello que creamos a partir de ello. La idea de ser un arbol torcido no me gusta.",
    "Cada que es necesario, publico lo que soy capaz de hacer, entonces bien, te invito cordialmente a que descubras que frutos salen del arbol que llevo un tiempo sembrando, mira y toca lo que quieras y mira más de mí si lo deseas en mi sección 'Sobre Mí'. Un saludo, te veo en el proyecto."
],
    explainationContainer = document.querySelector('.header_content__txt_vignets'),
    explainationSelectionMenu = document.querySelector('.header_content__stage_dotts'),
    explainationOption = document.querySelector('.header_content__stage_dotts__dott'),
    profileImage = document.getElementById('prf-img'),
    optionButtonCopy;

profileImage.src = developerProfile.profilePhoto[0];
explainationContainer.textContent = introductionExplanations[0];

// Create vignette buttons
for (let index = 1; index < introductionExplanations.length; index++) {
    optionButtonCopy = explainationOption.cloneNode(true);
    optionButtonCopy.id = index;
    explainationSelectionMenu.appendChild(optionButtonCopy);
}

let intervalIndex = 0; // Initialize to 0 to correctly highlight the first option
let stageOptions = document.querySelectorAll('.header_content__stage_dotts__dott');

// Function to update the displayed explanation and highlight the corresponding dot
const updateExplanation = (index) => {
    // Remove background from all options
    stageOptions.forEach(option => {
        option.style.background = 'none';
    });

    // Set background for the current option
    stageOptions[index].style.background = '#110800';
    explainationContainer.textContent = introductionExplanations[index];
    intervalIndex = index; // Update intervalIndex to current index
};

// Initial display setup
updateExplanation(0); // Show the first explanation and highlight the first dot

// Clear the existing interval to prevent conflicts with click events
let autoAdvanceInterval = setInterval(() => {
    let nextIndex = (intervalIndex + 1) % introductionExplanations.length;
    updateExplanation(nextIndex);
}, 7500);

// Add event listeners to each stage option for click functionality
stageOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        clearInterval(autoAdvanceInterval); // Stop auto-advance when a button is clicked
        updateExplanation(index); // Update to the clicked explanation
        // Restart the interval after a click, so it resumes auto-advancing from the new position
        autoAdvanceInterval = setInterval(() => {
            let nextIndex = (intervalIndex + 1) % introductionExplanations.length;
            updateExplanation(nextIndex);
        }, 7500);
    });
});

let stellarProjectContainer = {
    projectFace: document.querySelector(".container__photo"),
    projectName: document.querySelector(".project_data__name"),
    shortProjectDescription: document.querySelector(".project_data__description"),
    projectHref: document.querySelector('.project_data__view_more_opt'),
    projectTechStack: document.querySelector(".project_data__used_tech_stack")
};

if (webProjectsList.length === 0) {
    document.querySelector('.fav_project_presentation').style.display = 'none';   
    document.querySelector('.landing_menu__option:nth-child(2)').style.display = 'none';
} else {    
    const showBestProject = () => {
        webProjectsList.forEach(project => {
            if (project.isBestProject) {
                stellarProjectContainer.projectFace.src = project.footage[0];
                stellarProjectContainer.projectName.textContent = project.titleName;
                stellarProjectContainer.shortProjectDescription.textContent = project.infoDescription;
                stellarProjectContainer.projectHref.href = project.infoModule;

                let techInStack = document.createElement('li'), techNodeCopy;
                techInStack.classList.add('used_tech_stack__icon_el');

                project.techsUsed.forEach(tech => {
                    techNodeCopy = techInStack.cloneNode();
                    techNodeCopy.innerHTML = developerProfile.technicalSkills.get(tech);
                    stellarProjectContainer.projectTechStack.appendChild(techNodeCopy);
                });
            }
        });
    };
    showBestProject();
}

let contactForm = {
    fatherContainer: document.getElementById('contact-form'),
    formUsername: document.getElementById('org-name'),
    formUserEmail: document.getElementById('org-email'),
    formUserNumber: document.getElementById('org-number'),
    formContent: document.getElementById('org-message'),
};

document.addEventListener('submit', e => {
    if (e.target.matches('#contact-form')) {
        e.preventDefault();

        // Re-evaluate validation regex inside the event listener to get current values
        const emailFormValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.formUserEmail.value);
        const phoneNumberFormValidation = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(contactForm.formUserNumber.value);

        if (contactForm.formUsername.value.length > 100 || contactForm.formUsername.value.length <= 0 || typeof contactForm.formUsername.value !== 'string') { // Changed to check username type
            alert('Formato de nombre inválido. Asegúrate de que el nombre no esté vacío y tenga menos de 100 caracteres.');
        } else if (!emailFormValidation || contactForm.formUserEmail.value.length > 100 || contactForm.formUserEmail.value.length <= 0) { // Check email format directly
            alert('Formato de correo inválido. Asegúrate de que el correo tenga un formato válido y menos de 100 caracteres.');
        } else if (!phoneNumberFormValidation || contactForm.formUserNumber.value.length < 10 || contactForm.formUserNumber.value.length > 11) { // Check phone number format directly
            alert('Formato de teléfono inválido. Asegúrate de que el número tenga entre 10 y 11 dígitos y sea válido.');
        } else if (contactForm.formContent.value.length <= 0) {
            alert('El mensaje no puede estar vacío.');
        } else {
            e.target.submit();
        }
    }
});
