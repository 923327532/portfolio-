import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-slate-900">
      <!-- Background Particles/Waves Effect -->
      <div class="absolute inset-0 z-0 opacity-30">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-orange-400/20 animate-pulse-slow"></div>
        <div class="absolute w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-float-slow top-1/4 left-1/4"></div>
        <div class="absolute w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-float-slow bottom-1/4 right-1/4" style="animation-delay: 2s;"></div>
        <div class="absolute w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-float-slow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style="animation-delay: 4s;"></div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 text-center max-w-4xl mx-auto">
        <!-- Profile Image -->
        <div class="relative mb-8 inline-block">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full blur-xl opacity-75 animate-glow"></div>
          <img
            src="images/profile.png"
            alt="Roberto López Calle"
            class="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl"
          />
        </div>

        <!-- Name with Gradient -->
        <h1 class="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent animate-fade-in-up">
          Roberto López
        </h1>

        <!-- Title -->
        <h2 class="text-2xl md:text-3xl font-space-grotesk text-slate-300 mb-2 animate-fade-in-up" style="animation-delay: 0.2s;">
          Backend Developer & Cloud Enthusiast
        </h2>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-slate-400 mb-4 max-w-2xl mx-auto animate-fade-in-up font-inter" style="animation-delay: 0.4s;">
          Especialista en Java Spring Boot, Microservicios y Liderazgo de Equipos
        </p>

        <!-- Experience -->
        <div class="text-lg md:text-xl font-space-grotesk text-blue-400 mb-8 animate-fade-in-up" style="animation-delay: 0.5s;">
          +2 Años de Experiencia
        </div>

        <!-- Location -->
        <div class="flex items-center justify-center gap-2 text-slate-400 mb-8 animate-fade-in-up" style="animation-delay: 0.6s;">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
          <span class="font-inter">San Borja, Lima - Perú</span>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style="animation-delay: 0.8s;">
          <a href="#contact"
             class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            Contáctame
          </a>
          <a href="#projects"
             class="px-8 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
            Ver Proyectos
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
  `]
})
export class HeroComponent {

}
