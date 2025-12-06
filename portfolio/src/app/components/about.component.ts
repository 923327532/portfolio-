import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 px-4 bg-slate-900">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Sobre Mí
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <!-- Main Content -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-6">
            <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 class="text-2xl font-space-grotesk font-bold text-white mb-4">
                Mi Historia
              </h3>
              <p class="text-slate-300 font-inter leading-relaxed mb-6">
                Estudiante de 4.º ciclo en Tecsup (Diseño y Desarrollo de Software).
                Me diferencio por combinar una sólida lógica de programación (Backend/Cloud)
                con habilidades blandas excepcionales.
              </p>
              <p class="text-slate-300 font-inter leading-relaxed mb-6">
                Lideré equipos de 17 personas en el sector corporativo, lo que me dio una
                capacidad única de comunicación y resolución de problemas bajo presión.
              </p>

              <!-- Key Highlights -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span class="text-slate-300 font-inter">Liderazgo de Equipos</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span class="text-slate-300 font-inter">Backend Development</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span class="text-slate-300 font-inter">Cloud Technologies</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span class="text-slate-300 font-inter">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="relative">
            <!-- Floating Cards -->
            <div class="space-y-6">
              <!-- Leadership Card -->
              <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-6 border border-blue-400/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-white font-space-grotesk font-semibold">Liderazgo</h4>
                    <p class="text-slate-400 font-inter text-sm">17 personas gestionadas</p>
                  </div>
                </div>
              </div>

              <!-- Backend Card -->
              <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md rounded-xl p-6 border border-orange-400/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10" style="margin-left: 2rem;">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-white font-space-grotesk font-semibold">Backend</h4>
                    <p class="text-slate-400 font-inter text-sm">Java & Python Expert</p>
                  </div>
                </div>
              </div>

              <!-- Cloud Card -->
              <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-xl p-6 border border-purple-400/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10" style="margin-left: 4rem;">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-white font-space-grotesk font-semibold">Cloud</h4>
                    <p class="text-slate-400 font-inter text-sm">AWS & Kubernetes</p>
                  </div>
                </div>
              </div>
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
export class AboutComponent {

}

