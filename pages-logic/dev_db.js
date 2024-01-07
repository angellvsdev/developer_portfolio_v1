export const developerProfile = {
    profilePhoto: [
        './Web Portfolio Profile Photo (1).jpg',
        './Web Portfolio Profile Photo (2).jpg'
    ],
    completeName: "Angel Leonardo",
    surnames: "Vera Soto",
    age: 18,
    developerRoles: ["Desarrollador Web / Programador Front-End"],
    softSkills: ['Paciente', 'Enérgico', 'Analítico', 'Dedicado', 'Disciplinado', 'Comunicativo', 'Curioso'],
    technicalSkills: new Map(),
    socialMediaLinks: ['https://www.instagram.com/angellvsdev/?next=%2F', 'https://github.com/angellvsdev', 'https://www.linkedin.com/in/angel-vera-068549289/']
}

developerProfile.technicalSkills.set('HTML', '<i class="fa-brands fa-html5"></i>')
developerProfile.technicalSkills.set('CSS', '<i class="fa-brands fa-css3-alt"></i>')
developerProfile.technicalSkills.set('JavaScript', '<i class="fa-brands fa-js"></i>')
developerProfile.technicalSkills.set('Terminal / CMD', '<i class="fa-solid fa-terminal"></i>')
developerProfile.technicalSkills.set('Git', '<i class="fa-brands fa-git-alt"></i>')
developerProfile.technicalSkills.set('GitHub', '<i class="fa-brands fa-github"></i>')
developerProfile.technicalSkills.set('SASS', '<i class="fa-brands fa-sass"></i>')