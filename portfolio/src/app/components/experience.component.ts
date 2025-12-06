import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 px-4 bg-slate-800">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Experiencia Profesional
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400"></div>

          <!-- Experience Items -->
          <div class="space-y-12">
            <!-- Becoll Perú / FitNetwor -->
            <div class="relative flex items-center">
              <!-- Timeline Dot -->
              <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 shadow-lg">
                <div class="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              </div>

              <!-- Content -->
              <div class="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/10">
                  <!-- Leadership Badge -->
                  <div class="flex items-center gap-3 mb-4">
                    <span class="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-full text-sm font-space-grotesk font-semibold border border-yellow-400/20">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      Liderazgo Destacado
                    </span>
                    <span class="text-slate-400 font-inter text-sm">2021 - 2023</span>
                  </div>

                  <h3 class="text-2xl font-space-grotesk font-bold text-white mb-2">
                    Becoll Perú / FitNetwor
                  </h3>
                  <div class="text-lg text-blue-400 font-inter font-semibold mb-4">
                    Asesor Comercial → Supervisor
                  </div>

                  <p class="text-slate-300 font-inter leading-relaxed mb-6">
                    Empecé como Asesor Comercial y fui ascendido a Supervisor.
                    Gestioné un equipo de 17 personas, optimizando procesos de venta corporativa.
                  </p>

                  <!-- Leadership Highlights -->
                  <div class="grid md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-slate-700/50 rounded-lg p-4">
                      <div class="flex items-center gap-3 mb-2">
                        <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </div>
                        <span class="text-white font-space-grotesk font-semibold">17 Personas</span>
                      </div>
                      <p class="text-slate-400 font-inter text-sm">Equipo gestionado</p>
                    </div>

                    <div class="bg-slate-700/50 rounded-lg p-4">
                      <div class="flex items-center gap-3 mb-2">
                        <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <span class="text-white font-space-grotesk font-semibold">Ascenso</span>
                      </div>
                      <p class="text-slate-400 font-inter text-sm">De asesor a supervisor</p>
                    </div>
                  </div>

                  <!-- Skills Applied -->
                  <div>
                    <h4 class="text-white font-space-grotesk font-semibold mb-3">Habilidades Aplicadas:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-inter">Liderazgo de Equipos</span>
                      <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-inter">Gestión de Procesos</span>
                      <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-inter">Resolución de Conflictos</span>
                      <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-inter">Optimización de Ventas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Experience Item -->
            <div class="relative flex items-center">
              <!-- Timeline Dot -->
              <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 shadow-lg">
                <div class="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75" style="animation-delay: 0.5s;"></div>
              </div>

              <!-- Content (Right Side) -->
              <div class="ml-16 md:ml-0 md:w-1/2 md:pl-12 md:text-right">
                <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/10">
                  <div class="text-slate-400 font-inter text-sm mb-4">2023 - Presente</div>

                  <h3 class="text-2xl font-space-grotesk font-bold text-white mb-2">
                    Desarrollo Independiente
                  </h3>
                  <div class="text-lg text-purple-400 font-inter font-semibold mb-4">
                    Backend Developer & Arquitecto
                  </div>

                  <p class="text-slate-300 font-inter leading-relaxed mb-6">
                    Desarrollo de aplicaciones full-stack, enfocándome en arquitecturas escalables
                    y mejores prácticas de desarrollo backend.
                  </p>

                  <!-- Current Focus -->
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-slate-700/50 rounded-lg p-4">
                      <div class="flex items-center gap-3 mb-2">
                        <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                          </svg>
                        </div>
                        <span class="text-white font-space-grotesk font-semibold">Microservicios</span>
                      </div>
                      <p class="text-slate-400 font-inter text-sm">Arquitecturas escalables</p>
                    </div>

                    <div class="bg-slate-700/50 rounded-lg p-4">
                      <div class="flex items-center gap-3 mb-2">
                        <div class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                          </svg>
                        </div>
                        <span class="text-white font-space-grotesk font-semibold">Cloud Ready</span>
                      </div>
                      <p class="text-slate-400 font-inter text-sm">Preparado para AWS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Leadership Summary -->
        <div class="mt-16 text-center">
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 class="text-2xl font-space-grotesk font-bold text-white mb-4">
              Habilidades de Liderazgo Transferibles
            </h3>
            <p class="text-slate-300 font-inter leading-relaxed mb-6 max-w-3xl mx-auto">
              Mi experiencia en gestión de equipos me ha preparado para roles de liderazgo técnico,
              combinando habilidades blandas excepcionales con expertise técnico en desarrollo backend.
              Con <span class="text-blue-400 font-semibold">más de 2 años de experiencia</span> en el sector, mi objetivo es fusionar la excelencia técnica con la visión estratégica.
            </p>
            <div class="grid md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 class="text-white font-space-grotesk font-semibold mb-1">Liderazgo</h4>
                <p class="text-slate-400 font-inter text-sm">Gestión de equipos</p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="text-white font-space-grotesk font-semibold mb-1">Comunicación</h4>
                <p class="text-slate-400 font-inter text-sm">Resolución de problemas</p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-white font-space-grotesk font-semibold mb-1">Innovación</h4>
                <p class="text-slate-400 font-inter text-sm">Procesos eficientes</p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h4 class="text-white font-space-grotesk font-semibold mb-1">Analytics</h4>
                <p class="text-slate-400 font-inter text-sm">Métricas y resultados</p>
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
export class ExperienceComponent {

}
