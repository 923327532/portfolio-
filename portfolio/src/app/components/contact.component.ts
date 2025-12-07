import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <section id="contact" class="py-20 px-4 bg-slate-800">
      <div class="max-w-6xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">Hablemos Ahora</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
          <p class="text-slate-300 font-inter mt-4 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? Estoy disponible.
          </p>
          
          <!-- Botón WhatsApp -->
          <a href="https://wa.link/1n85eu" target="_blank" class="inline-flex items-center justify-center mt-8 px-10 py-4 bg-green-500 text-white text-xl font-bold rounded-full hover:bg-green-600 transition-all transform hover:scale-105">
            Chatear por WhatsApp
          </a>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          
          <!-- Info Contacto -->
          <div class="space-y-8">
            <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl text-white">
              <h3 class="text-2xl font-bold mb-6">Información</h3>
              <p class="mb-4">📧 roberolopezcalle072@gmail.com</p>
              <p class="mb-4">📱 +51 923 327 532</p>
              <p>📍 San Borja, Lima - Perú</p>
            </div>
          </div>

          <!-- Formulario -->
          <div>
            <div class="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl mb-8">
              <h3 class="text-2xl font-bold text-white mb-6">Envíame un Mensaje</h3>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                
                <!-- Nombre -->
                <div>
                  <label class="block text-slate-300 text-sm font-semibold mb-2">Nombre</label>
                  <input type="text" formControlName="name" class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white" placeholder="Tu nombre">
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-slate-300 text-sm font-semibold mb-2">Email</label>
                  <input type="email" formControlName="email" class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white" placeholder="tu@email.com">
                </div>

                <!-- Asunto -->
                <div>
                  <label class="block text-slate-300 text-sm font-semibold mb-2">Asunto</label>
                  <input type="text" formControlName="subject" class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white" placeholder="Asunto">
                </div>

                <!-- Mensaje -->
                <div>
                  <label class="block text-slate-300 text-sm font-semibold mb-2">Mensaje</label>
                  <textarea formControlName="content" rows="5" class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white" placeholder="Tu mensaje..."></textarea>
                </div>

                <!-- Botón -->
                <button type="submit" [disabled]="contactForm.invalid || isSubmitting" class="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:scale-105 transition-all disabled:opacity-50">
                  {{ isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE' }}
                </button>

                <!-- Mensajes de Estado -->
                <p *ngIf="successMessage" class="text-green-400 font-bold text-center mt-2">{{ successMessage }}</p>
                <p *ngIf="errorMessage" class="text-red-400 font-bold text-center mt-2">{{ errorMessage }}</p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.messageService.sendMessage(this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = '¡Mensaje enviado con éxito!';
          this.contactForm.reset();
          this.isSubmitting = false;
          setTimeout(() => this.successMessage = '', 5000);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Hubo un error al enviar.';
          this.isSubmitting = false;
        }
      });
    }
  }
}
