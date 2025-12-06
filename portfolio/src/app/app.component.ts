import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // INFO PERSONAL
  nombre = "Roberto López Calle";
  titulo = "Backend Developer & Cloud Enthusiast";
  subtitulo = "Especialista en Java Spring Boot, Microservicios y Liderazgo de Equipos.";
  ubicacion = "San Borja, Lima - Perú";
  fotoPerfil = "images/profile.png"; 
  qrImagen = "images/QR.png"; 
  whatsappLink = "https://wa.link/1n85eu";
  email = "roberolopezcalle072@gmail.com";
  linkedin = "https://www.linkedin.com/in/lópez2003";

  sobreMiTexto = "Estudiante de 4.º ciclo en Tecsup. Experiencia dual: Desarrollo de Software (Backend) + Gestión Comercial Internacional (España/Chile). Liderazgo comprobado gestionando equipos de ventas.";

  // STACK
  stackTecnologico = {
    backendCore: [
      { name: 'Java', nivel: 'Intermedio', icon: 'devicon-java-plain colored' },
      { name: 'Spring Boot', nivel: 'Core', icon: 'devicon-spring-original colored' },
      { name: 'Python', nivel: 'Avanzado', icon: 'devicon-python-plain colored' },
      { name: 'PostgreSQL', nivel: 'DB', icon: 'devicon-postgresql-plain colored' },
      { name: 'MongoDB', nivel: 'NoSQL', icon: 'devicon-mongodb-plain colored' }
    ],
    frameworks: [
      { name: 'Docker', nivel: 'DevOps', icon: 'devicon-docker-plain colored' },
      { name: 'Microservicios', nivel: 'Arq.', icon: 'devicon-network-plain colored' },
      { name: 'AWS', nivel: 'Cloud', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Scrum', nivel: 'Agile', icon: 'devicon-jira-plain colored' }
    ],
    frontend: [
      { name: 'Angular', nivel: 'Front', icon: 'devicon-angularjs-plain colored' },
      { name: 'React', nivel: 'Front', icon: 'devicon-react-original colored' },
      { name: 'Bootstrap', nivel: 'UI', icon: 'devicon-bootstrap-plain colored' }
    ]
  };

  // --- EXPERIENCIA ACTUALIZADA (CHILE + ESPAÑA) ---
  experiencia = [
    {
      empresa: "Empresa Sector Telecomunicaciones (Chile)",
      periodo: "2023 (6 meses)",
      cargo: "Gestor Comercial",
      logro: "Gestión estratégica de cartera de clientes y expansión comercial en el mercado chileno."
    },
    {
      empresa: "Becoll Perú (Mercado España)",
      periodo: "Mar 2021 - Dic 2023",
      cargo: "Supervisor Comercial (Ascenso)",
      logro: "Lideré equipo de 17 asesores. Optimización de ventas B2B para telecomunicaciones españolas."
    }
  ];

  // PROYECTOS
  proyectos = [
    {
      nombre: "App Bancaria Full Stack",
      rol: "Backend Lead",
      tech: ["Python", "Flask", "MongoDB"],
      bgIcon: "devicon-python-plain",
      descripcion: "Sistema bancario completo: administración de cuentas, transferencias y pagos QR."
    },
    {
      nombre: "Tecsup Vocacional",
      rol: "Full Stack Integrator",
      tech: ["Java Spring", "Docker", "React"],
      bgIcon: "devicon-java-plain",
      descripcion: "Plataforma integral de orientación vocacional con arquitectura de microservicios."
    }
  ];

  educacion = {
    institucion: "Tecsup",
    carrera: "Diseño y Desarrollo de Software",
    estado: "4to Ciclo (En curso)",
    anio: "2024 - Presente"
  };

  // --- CERTIFICACIONES (ESTILO TARJETA DE PRODUCTO) ---
  // Usamos iconos grandes como "foto del producto"
  certificacionesConIcono = [
    { nombre: "Especialización Backend Java", fecha: "2024-2025", icon: "devicon-java-plain colored", tipo: "Backend" },
    
    // CAMBIO AQUÍ: Icono de Red/Seguridad para Cisco
    { nombre: "Ciberseguridad (Cisco)", fecha: "2023-2024", icon: "devicon-linux-plain colored", tipo: "Seguridad" }, 
    
    { nombre: "Certificación MongoDB", fecha: "2025", icon: "devicon-mongodb-plain colored", tipo: "Base de Datos" },
    { nombre: "Marketing Digital", fecha: "2023-2024", icon: "devicon-google-plain colored", tipo: "Negocios" },
    { nombre: "Gestión Inmobiliaria", fecha: "2022-2023", icon: "devicon-trello-plain colored", tipo: "Ventas" } // Trello representa gestión
  ];
}
