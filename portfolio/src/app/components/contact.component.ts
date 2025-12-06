import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-20 px-4 bg-slate-800">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Hablemos Ahora
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
          <p class="text-slate-300 font-inter mt-4 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? Estoy disponible para oportunidades de desarrollo backend,
            liderazgo técnico y proyectos innovadores.
          </p>

          <!-- WhatsApp CTA Button -->
          <a href="https://wa.link/1n85eu"
             target="_blank"
             rel="noopener noreferrer"
             class="inline-flex items-center justify-center mt-8 px-10 py-4 bg-green-500 text-white text-xl font-bold rounded-full shadow-lg shadow-green-500/30
                    hover:bg-green-600 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 group">
            <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.557-3.844-1.557-5.873C.187 5.567 5.618 0 12.43 0c3.15 0 6.136 1.258 8.398 3.517 2.262 2.26 3.52 5.247 3.52 8.398 0 6.812-5.431 12.243-12.244 12.243-2.03 0-4.06-0.516-5.864-1.557l-6.163 1.687zm18.331-5.696c-0.231-0.124-1.353-0.662-1.564-0.738-0.211-0.076-0.364-0.09-0.517 0.09-0.153 0.18-0.592 0.738-0.724 0.887-0.132 0.153-0.264 0.171-0.485 0.061-0.222-0.109-0.933-0.344-1.77-1.09-0.655-0.574-1.099-1.287-1.229-1.516-0.13-0.229-0.014-0.349 0.096-0.459 0.098-0.109 0.211-0.264 0.317-0.396 0.106-0.132 0.142-0.222 0.222-0.375s0.045-0.287-0.015-0.406c-0.06-0.12-0.517-1.242-0.709-1.699-0.187-0.449-0.375-0.38-0.517-0.38-0.153 0-0.334-0.021-0.517-0.021s-0.406 0.09-0.617 0.316c-0.211 0.229-0.806 0.787-0.806 1.918 0 1.132 0.825 2.222 0.941 2.385 0.115 0.153 1.625 2.502 3.931 3.492 0.592 0.252 1.056 0.402 1.411 0.514 0.589 0.174 1.135 0.15 1.555 0.098 0.461-0.054 1.353-0.553 1.545-1.082 0.192-0.528 0.192-0.982 0.132-1.089-0.06-0.106-0.212-0.153-0.443-0.277z"/>
            </svg>
            Chatear por WhatsApp
          </a>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Contact Cards -->
            <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 class="text-2xl font-space-grotesk font-bold text-white mb-6">Información de Contacto</h3>

              <!-- Email -->
              <div class="flex items-center gap-4 mb-6 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors">
                <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-space-grotesk font-semibold">Email</h4>
                  <a href="mailto:roberolopezcalle072@gmail.com"
                     class="text-slate-300 font-inter hover:text-blue-400 transition-colors">
                    roberolopezcalle072@gmail.com
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-center gap-4 mb-6 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors">
                <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-space-grotesk font-semibold">Teléfono</h4>
                  <a href="tel:+51923327532"
                     class="text-slate-300 font-inter hover:text-green-400 transition-colors">
                    +51 923 327 532
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-4 mb-6 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors">
                <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-space-grotesk font-semibold">Ubicación</h4>
                  <p class="text-slate-300 font-inter">San Borja, Lima - Perú</p>
                </div>
              </div>

              <!-- LinkedIn -->
              <div class="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors">
                <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-space-grotesk font-semibold">LinkedIn</h4>
                  <a href="https://linkedin.com/in/lópez2003"
                     target="_blank"
                     rel="noopener noreferrer"
                     class="text-slate-300 font-inter hover:text-orange-400 transition-colors">
                    linkedin.com/in/lópez2003
                  </a>
                </div>
              </div>
            </div>

            <!-- Availability Status -->
            <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 border border-green-400/20">
              <div class="flex items-center gap-4">
                <div class="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 class="text-white font-space-grotesk font-semibold">Disponible para Oportunidades</h4>
                  <p class="text-slate-300 font-inter text-sm">Backend Development & Liderazgo Técnico</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form & QR Card -->
          <div>
            <!-- Contact Form -->
            <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl mb-8">
              <h3 class="text-2xl font-space-grotesk font-bold text-white mb-6">Envíame un Mensaje</h3>

              <form class="space-y-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-slate-300 font-inter text-sm font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-inter placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-slate-300 font-inter text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-inter placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <!-- Subject -->
                <div>
                  <label for="subject" class="block text-slate-300 font-inter text-sm font-semibold mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-inter placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-slate-300 font-inter text-sm font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-inter placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-inter font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <!-- QR Card -->
            <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl text-center">
              <h3 class="text-2xl font-space-grotesk font-bold text-white mb-6">Escanea para Chatear</h3>
              <div class="inline-block p-4 bg-white rounded-lg shadow-inner border border-gray-200">
                <img src="images/QR.png" alt="QR Code for WhatsApp" class="w-48 h-48 object-contain">
              </div>
              <p class="text-slate-400 font-inter mt-4">¡Rápido y fácil!</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-16 text-center">
          <div class="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <p class="text-slate-400 font-inter">
              © 2025 Roberto López Calle. Desarrollado con Angular & TailwindCSS.
            </p>
            <p class="text-slate-500 font-inter text-sm mt-2">
              Portafolio creado para mostrar mis habilidades como Backend Developer & Future Tech Leader.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
  `]
})
export class ContactComponent {

}
