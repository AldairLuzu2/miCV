const cvData = {
    nombre: "Rubén AldaiR Luzuriaga León",
    titulo: "Tecnologo en Desarrollo de Software",
    email: "aldair.luzuriaga.l.istjba@gmail.com",
    telefono: "0967028623",
    direccion: "Guayas-Nobol",
    github: "https://github.com/AldairLuzu2",
    linkedin: "https://www.linkedin.com/in/aldair-luzuriaga-885b9b349/",
    descripcion: "Soy un apasionado por la tecnología y el desarrollo de software con experiencia en diversos lenguajes de programación y frameworks. Me considero una persona proactiva, con capacidad para trabajar en equipo y resolver problemas de manera eficiente. Busco oportunidades para seguir creciendo profesionalmente y contribuir con mis conocimientos.",
    
    estudios: [
        {
            titulo: "Tecnologo en Desarrollo de Software",
            institucion: "Instituto Juan Bautista Aguirre",
            fecha: "2023 - Actualidad",
            semestre: "5to Semestre",
            descripcion: "Cursando actualmente, con enfoque en desarrollo de software e inteligencia artificial."
        },
        {
            titulo: "Técnico en Programación",
            institucion: "Presidente Jose Luis Tamayo",
            fecha: "2019 - 2023",
            descripcion: "Formación en fundamentos de programación orientada a Objetos."
        }
    ],
    
    habilidades: [
        { nombre: "JavaScript", icono: "fab fa-js" },
        { nombre: "TypeScript", icono: "fas fa-code" },
        { nombre: "Python", icono: "fab fa-python" },
        { nombre: "PHP", icono: "fab fa-php" },
        { nombre: "C++", icono: "fas fa-file-code" },
        { nombre: "Visual Basic", icono: "fas fa-laptop-code" },
        { nombre: "Django", icono: "fab fa-python" },
        { nombre: "HTML5", icono: "fab fa-html5" },
        { nombre: "CSS3", icono: "fab fa-css3-alt" },
        { nombre: "React", icono: "fab fa-react" },
        { nombre: "Node.js", icono: "fab fa-node-js" },
        { nombre: "Java", icono: "fab fa-java" },
        { nombre: "Git", icono: "fab fa-git-alt" },
        { nombre: "SQL", icono: "fas fa-database" }
    ],
    
    proyectos: [
        {
            nombre: "Sistema de Cobro de Tarifa de Buses Intercantonales en el Cantón Daule",
            fecha: "Mayo 2024 - Julio 2024",
            descripcion: "Plataforma que permite a los usuarios pagar su pasaje a trabes de una tarjeta NFC(recargable).",
            rol: "Líder de Proyecto y Desarrollador",
            tecnologias: ["Java", "Arduino", "Mysql", "NFC"]
        },
        {
            nombre: "Desarrollo web del módulo de facturación para Restaurantes incluido la gestión de pedido por medio de una aplicación móvil ",
            fecha: "Noviembre 2024 - Febrero 2025",
            descripcion: "Sitio web donde los usuarios podran realizar su pedido de forma virtual escaneando los codigos qr de cada mesa y los administradores podran tener una mejor organizacion.",
            rol: "Líder de Proyecto y Desarrollador ",
            tecnologias: ["Django", "Python", "SQlife", "JavaScript", "Semantic Ui", "Node.js", "Yarn", "React"]
        }
    ]
};

function cargarCV() {
    document.getElementById('nombre').textContent = cvData.nombre;
    document.getElementById('titulo').textContent = cvData.titulo;
    document.getElementById('email').textContent = cvData.email;
    document.getElementById('telefono').textContent = cvData.telefono;
    document.getElementById('direccion').textContent = cvData.direccion;
    document.getElementById('github').textContent = cvData.github;
    document.getElementById('linkedin').textContent = cvData.linkedin;
    document.getElementById('descripcion').textContent = cvData.descripcion;
    
    const estudiosContainer = document.getElementById('estudios');
    cvData.estudios.forEach(estudio => {
        const estudioElement = document.createElement('div');
        estudioElement.className = 'timeline-item';
        
        estudioElement.innerHTML = `
            <h3>${estudio.titulo}</h3>
            <p class="institucion">${estudio.institucion}</p>
            <p class="date">${estudio.fecha} ${estudio.semestre ? `- ${estudio.semestre}` : ''}</p>
            <p>${estudio.descripcion}</p>
        `;
        
        estudiosContainer.appendChild(estudioElement);
    });
    
    const habilidadesContainer = document.getElementById('habilidades');
    cvData.habilidades.forEach(habilidad => {
        const habilidadElement = document.createElement('div');
        habilidadElement.className = 'skill';
        
        habilidadElement.innerHTML = `
            <i class="${habilidad.icono}"></i>
            <span>${habilidad.nombre}</span>
        `;
        
        habilidadesContainer.appendChild(habilidadElement);
    });
    
    const proyectosContainer = document.getElementById('proyectos');
    cvData.proyectos.forEach(proyecto => {
        const proyectoElement = document.createElement('div');
        proyectoElement.className = 'project';
        
        proyectoElement.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p class="date">${proyecto.fecha}</p>
            <p class="description">${proyecto.descripcion}</p>
            <p class="role"><strong>Rol:</strong> ${proyecto.rol}</p>
            <div class="technologies">
                <strong>Tecnologías:</strong> ${proyecto.tecnologias.join(', ')}
            </div>
        `;
        
        proyectosContainer.appendChild(proyectoElement);
    });
    
    document.getElementById('year').textContent = new Date().getFullYear();
}

function cambiarTema() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

function cargarTema() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
}

document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});

document.getElementById('themeBtn').addEventListener('click', cambiarTema);

document.addEventListener('DOMContentLoaded', () => {
    cargarTema();
    cargarCV();
    
    const foto = document.getElementById('profilePhoto');
    foto.addEventListener('mouseenter', () => {
        foto.style.transform = 'scale(1.05)';
    });
    foto.addEventListener('mouseleave', () => {
        foto.style.transform = 'scale(1)';
    });
});