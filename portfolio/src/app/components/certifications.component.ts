import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-20 px-4 bg-slate-900">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Certificaciones
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <!-- Certifications Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Ciberseguridad (Cisco) -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/10 group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-space-grotesk font-bold text-white">Ciberseguridad</h3>
                <p class="text-slate-400 font-inter text-sm">Cisco</p>
              </div>
            </div>
            <div class="bg-slate-700/50 rounded-lg p-3 mb-4">
              <p class="text-slate-300 font-inter text-sm leading-relaxed">
                Fundamentos de seguridad informática, protección de redes y mejores prácticas de ciberseguridad.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-slate-500 font-inter">Completado</span>
              <div class="flex">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Backend Java & Spring Boot -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/10 group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-space-grotesk font-bold text-white">Backend Java & Spring Boot</h3>
                <p class="text-slate-400 font-inter text-sm">Oracle Academy</p>
              </div>
            </div>
            <div class="bg-slate-700/50 rounded-lg p-3 mb-4">
              <p class="text-slate-300 font-inter text-sm leading-relaxed">
                Desarrollo de aplicaciones backend con Java, Spring Framework y mejores prácticas de arquitectura.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-slate-500 font-inter">Completado</span>
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- MongoDB -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/10 group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-space-grotesk font-bold text-white">MongoDB</h3>
                <p class="text-slate-400 font-inter text-sm">MongoDB University</p>
              </div>
            </div>
            <div class="bg-slate-700/50 rounded-lg p-3 mb-4">
              <p class="text-slate-300 font-inter text-sm leading-relaxed">
                Diseño de bases de datos NoSQL, consultas avanzadas y optimización de rendimiento.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-slate-500 font-inter">Completado</span>
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Publicidad y Marketing Digital -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/10 group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-space-grotesk font-bold text-white">Publicidad y Marketing Digital</h3>
                <p class="text-slate-400 font-inter text-sm">Google & Meta</p>
              </div>
            </div>
            <div class="bg-slate-700/50 rounded-lg p-3 mb-4">
              <p class="text-slate-300 font-inter text-sm leading-relaxed">
                Estrategias de marketing digital, publicidad en redes sociales y análisis de campañas.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-slate-500 font-inter">Completado</span>
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Asesor Comercial Inmobiliario -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/10 group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-space-grotesk font-bold text-white">Asesor Comercial Inmobiliario</h3>
                <p class="text-slate-400 font-inter text-sm">Cámara de Comercio</p>
              </div>
            </div>
            <div class="bg-slate-700/50 rounded-lg p-3 mb-4">
              <p class="text-slate-300 font-inter text-sm leading-relaxed">
                Técnicas de venta inmobiliaria, negociación y gestión de propiedades comerciales.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-slate-500 font-inter">Completado</span>
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- AWS In Progress -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/10 group relative overflow-hidden">
            <!-- In Progress Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-inter font-semibold border border-yellow-400/20">
                En Progreso
              </span>
            </div>

            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-space-grotesk font-bold text-white">AWS Cloud Practitioner</h3>
                <p class="text-slate-400 font-inter text-sm">Amazon Web Services</p>
              </div>
            </div>
            <div class="bg-slate-700/50 rounded-lg p-3 mb-4">
              <p class="text-slate-300 font-inter text-sm leading-relaxed">
                Fundamentos de servicios cloud AWS, arquitectura en la nube y mejores prácticas.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-yellow-400 font-inter">75% Completado</span>
              <div class="flex gap-1">
                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div class="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div class="text-3xl font-bold text-blue-400 mb-2">5+</div>
            <div class="text-slate-300 font-inter">Certificaciones Completadas</div>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div class="text-3xl font-bold text-purple-400 mb-2">1</div>
            <div class="text-slate-300 font-inter">En Progreso</div>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div class="text-3xl font-bold text-green-400 mb-2">6</div>
            <div class="text-slate-300 font-inter">Total de Certificaciones</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
  `]
})
export class CertificationsComponent {

}

