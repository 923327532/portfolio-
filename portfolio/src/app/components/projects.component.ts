import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 bg-slate-900">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Proyectos
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <!-- Featured Project -->
        <div class="mb-16">
          <div class="text-center mb-8">
            <span class="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-space-grotesk font-semibold border border-yellow-400/20">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              Proyecto Estrella
            </span>
          </div>

          <div class="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <!-- Project Info -->
              <div>
                <h3 class="text-3xl font-space-grotesk font-bold text-white mb-4">
                  Aplicación Bancaria Full Stack
                </h3>
                <div class="flex items-center gap-4 mb-6">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-inter">Backend Lead</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-inter">Arquitectura</span>
                </div>

                <p class="text-slate-300 font-inter leading-relaxed mb-6">
                  Construí el 100% de las APIs consumidas por el frontend e implementé seguridad diferenciada
                  para usuarios y administradores. Sistema completo de transferencias y pagos QR.
                </p>

                <!-- Tech Stack -->
                <div class="mb-6">
                  <h4 class="text-white font-space-grotesk font-semibold mb-3">Tecnologías:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-inter">Python</span>
                    <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-inter">Flask</span>
                    <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-inter">PyMongo</span>
                    <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-inter">Bootstrap</span>
                  </div>
                </div>

                <!-- Features -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span class="text-slate-300 font-inter text-sm">APIs REST completas</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span class="text-slate-300 font-inter text-sm">Autenticación JWT</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span class="text-slate-300 font-inter text-sm">Transferencias seguras</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span class="text-slate-300 font-inter text-sm">Pagos QR integrados</span>
                  </div>
                </div>
              </div>

              <!-- Project Visual -->
              <div class="relative">
                <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <div class="space-y-6">
                    <!-- Code Preview -->
                    <div class="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-green-400">
                      <div class="text-slate-400 mb-2"># Backend API Example</div>
                      <div>@app.route('/transfer', methods=['POST'])</div>
                      <div>def transfer_money():</div>
                      <div class="ml-4">    # Security validation</div>
                      <div class="ml-4">    # QR payment processing</div>
                      <div class="ml-4">    return success_response</div>
                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div class="text-2xl font-bold text-blue-400">100%</div>
                        <div class="text-xs text-slate-400">APIs Built</div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-purple-400">2FA</div>
                        <div class="text-xs text-slate-400">Security</div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-orange-400">QR</div>
                        <div class="text-xs text-slate-400">Payments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Projects -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-blue-500/10 group">
            <div class="mb-4">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white mb-2">Microservicios E-commerce</h3>
              <p class="text-slate-400 font-inter text-sm mb-4">Arquitectura de microservicios con Spring Boot</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">Java</span>
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">Spring</span>
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">Docker</span>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-purple-500/10 group">
            <div class="mb-4">
              <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white mb-2">Sistema de Analytics</h3>
              <p class="text-slate-400 font-inter text-sm mb-4">Dashboard con Python y MongoDB</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">Python</span>
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">MongoDB</span>
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">Flask</span>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-green-500/10 group">
            <div class="mb-4">
              <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-space-grotesk font-bold text-white mb-2">API Gateway</h3>
              <p class="text-slate-400 font-inter text-sm mb-4">Microservicios con autenticación avanzada</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">Node.js</span>
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">Express</span>
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-inter">JWT</span>
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
export class ProjectsComponent {

}

