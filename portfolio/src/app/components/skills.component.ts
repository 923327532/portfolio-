import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 px-4 bg-slate-800">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Stack Tecnológico
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Backend Core -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white">Backend Core</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-slate-300 font-inter">Java</span>
                <div class="flex gap-1">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <div class="w-2 h-2 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-300 font-inter">Python</span>
                <div class="flex gap-1">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Frameworks & Arquitectura -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white">Frameworks</h3>
            </div>
            <div class="space-y-3">
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">Spring Boot</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">Microservicios</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">Docker</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">Scrum</span>
              </div>
            </div>
          </div>

          <!-- Base de Datos -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white">Base de Datos</h3>
            </div>
            <div class="space-y-3">
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">PostgreSQL</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">PyMongo</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">MongoDB</span>
              </div>
            </div>
          </div>

          <!-- Frontend & Otros -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white">Frontend</h3>
            </div>
            <div class="space-y-3">
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">HTML & CSS</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">Bootstrap</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">JavaScript (Básico)</span>
              </div>
              <div class="bg-slate-700/50 rounded-lg px-3 py-2">
                <span class="text-slate-300 font-inter text-sm">React (Nociones)</span>
              </div>
            </div>
          </div>

          <!-- En Aprendizaje -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white">En Aprendizaje</h3>
            </div>
            <div class="space-y-3">
              <div class="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg px-3 py-2 border border-cyan-400/20">
                <span class="text-cyan-300 font-inter text-sm">AWS</span>
              </div>
              <div class="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg px-3 py-2 border border-cyan-400/20">
                <span class="text-cyan-300 font-inter text-sm">Kubernetes</span>
              </div>
            </div>
          </div>

          <!-- Stats Card -->
          <div class="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div class="text-center">
              <div class="text-4xl font-bold text-white mb-2">4+</div>
              <div class="text-slate-400 font-inter text-sm mb-4">Años de Experiencia</div>
              <div class="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div class="bg-gradient-to-r from-blue-400 to-orange-500 h-2 rounded-full" style="width: 80%"></div>
              </div>
              <div class="text-xs text-slate-500">En Desarrollo Backend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
  `]
})
export class SkillsComponent {

}

