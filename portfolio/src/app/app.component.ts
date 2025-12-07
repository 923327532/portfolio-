import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router'; // Importar RouterOutlet
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet // Añadir RouterOutlet aquí
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // Información del perfil
  nombreCompleto = "Roberto López Calle";
  tituloPrincipal = "Backend Developer & Cloud Enthusiast";
  subtitulo = "Especialista en Java Spring Boot, Microservicios y Liderazgo de Equipos.";
  ubicacion = "San Borja, Lima - Perú";
  
  // Contacto
  emailContacto = "roberolopezcalle072@gmail.com";
  telefono = "+51 923327532";
  linkedinLink = "https://www.linkedin.com/in/lópez2003";
  whatsappLink = "https://wa.link/1n85eu";
  
  // Assets (imágenes)
  fotoPerfil = "images/profile.png"; 
  qrImagen = "images/QR.png"; 
  qrTexto = "Escanéame";

  // Perfil profesional (bio larga)
  sobreMiTexto = "Estudiante de 4.º ciclo de la carrera de Diseño y Desarrollo de Software en Tecsup. Con capacidad en solución de problemas, comunicación efectiva y adaptabilidad. Destacado por mi experiencia como Coordinador de Ventas y en organización comercial. Cuento con nivel avanzado en Python, nivel intermedio en Java y conocimientos en bases de datos PostgreSQL. Manejo la metodología ágil Scrum para la gestión y desarrollo de proyectos, además de contar con nivel intermedio en microservicios y Docker. Actualmente me encuentro en constante aprendizaje, fortaleciendo mis habilidades en servicios cloud con AWS.";

  // Experiencia laboral (detallada)
  experiencia = [
    {
      empresa: "Becoll Perú",
      periodo: "20 de marzo del 2021 al 30 de diciembre del 2023",
      rubro: "Telecomunicaciones (España)",
      cargo: "Asesor Comercial → Supervisor (Ascenso)",
      logro: "Fui destacado y ascendido como supervisor de su subcompañía FitNetwor, estando a cargo de 17 asesores. Realicé gestión de ventas corporativas B2B y optimización de procesos."
    }
  ];

  // Educación superior
  educacion = {
    institucion: "Instituto de Educación Superior Privado Tecsup",
    carrera: "Diseño y Desarrollo de Software",
    estado: "Estudiante del 4to ciclo",
    anio: "2024 - Presente"
  };

  // Certificaciones (lista completa)
  certificaciones = [
    "Especialización en Backend con Java y Spring Boot (2024–2025)",
    "Certificación en Ciberseguridad por Cisco (2023–2024)",
    "Certificación en MongoDB (2025)",
    "Certificación en Publicidad y Marketing Digital (2023–2024)",
    "Certificación como Asesor Comercial Inmobiliario (2022–2023)"
  ];

  // Stack tecnológico (con iconos)
  stackTecnologico = {
    backendCore: [
      { name: 'Java', nivel: 'Intermedio', icon: 'devicon-java-plain colored' },
      { name: 'Python', nivel: 'Avanzado', icon: 'devicon-python-plain colored' },
      { name: 'Spring Boot', nivel: 'Core', icon: 'devicon-spring-original colored' },
    ],
    frameworks: [
      { name: 'Microservicios', nivel: 'Intermedio', icon: 'fas fa-microchip' },
      { name: 'Docker', nivel: 'Intermedio', icon: 'devicon-docker-plain colored' },
      { name: 'Scrum', nivel: 'Agile', icon: 'devicon-jira-plain colored' },
    ],
    basesDeDatos: [
      { name: 'PostgreSQL', nivel: 'DB', icon: 'devicon-postgresql-plain colored' },
      { name: 'PyMongo', nivel: 'NoSQL', icon: 'devicon-mongodb-plain colored' },
      { name: 'MongoDB', nivel: 'NoSQL', icon: 'devicon-mongodb-plain colored' },
    ],
    frontend: [
      { name: 'HTML', nivel: 'Front', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', nivel: 'Front', icon: 'devicon-css3-plain colored' },
      { name: 'Bootstrap', nivel: 'Front', icon: 'devicon-bootstrap-plain colored' },
      { name: 'JavaScript', nivel: 'Front', icon: 'devicon-javascript-plain colored' },
      { name: 'React', nivel: 'Front', icon: 'devicon-react-original colored' },
    ],
    enAprendizaje: [
      { name: 'AWS', nivel: 'Learning', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Kubernetes', nivel: 'Learning', icon: 'devicon-kubernetes-plain colored' },
    ]
  };

  // Proyectos (incluyendo integrador)
  proyectos = [
    {
      nombre: "Aplicación Bancaria Full Stack",
      curso: "Estructuras de Datos y Algoritmos",
      rol: "Backend Lead & Arquitectura",
      tech: ["Python", "Flask", "PyMongo", "Bootstrap", "HTML/CSS"],
      bgIcon: "devicon-python-plain",
      descripcion: "Se desarrolló una aplicación bancaria completa. El sistema permite administrar cuentas, realizar transferencias y efectuar pagos QR. Estuve a cargo del backend, construyendo todas las APIs consumidas por el frontend e implementando seguridad diferenciada (User/Admin)."
    },
    {
      nombre: "Tecsup Vocacional (Integrador)",
      curso: "Proyecto Integrador",
      rol: "Full Stack & DevOps",
      tech: ["Java Spring Boot", "Microservicios", "Docker", "React", "Django"],
      bgIcon: "devicon-docker-plain",
      descripcion: "Plataforma integral de orientación vocacional. Implementé arquitectura de microservicios, contenedorización con Docker para escalabilidad y un frontend interactivo."
    }
  ];

  // Lógica de interfaz (foto giratoria)
  isProfileFlipped = false;
  toggleProfile() {
    this.isProfileFlipped = !this.isProfileFlipped;
  }

  // Contacto
  contactoTitulo = "Hablemos Ahora";
  contactoSubtitle = "Estoy disponible para oportunidades. Escríbeme directo para una respuesta rápida.";

  // Formulario de contacto
  contactForm!: FormGroup;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      // Caso especial: si no hay un input de asunto visible en el HTML,
      // se puede asignar un valor por defecto aquí si se detecta que el campo está vacío.
      if (!formValue.subject) {
        formValue.subject = "Contacto desde Portafolio";
      }
      this.messageService.sendMessage(formValue).subscribe({
        next: (response) => {
          alert('Mensaje enviado con éxito!');
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error);
          alert('Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.');
        }
      });
    } else {
      alert('Por favor, completa todos los campos requeridos y asegúrate de que el email sea válido.');
    }
  }
}
