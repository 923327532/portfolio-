import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../services/message.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="p-8 text-white min-h-full font-mono bg-black/90">
      
      <!-- CABECERA -->
      <h1 class="text-2xl font-bold mb-4 text-cyan-400 border-b border-gray-700 pb-2">
        📥 BUZÓN DE ENTRADA ({{ messages.length }})
      </h1>

      <!-- LOADING -->
      <div *ngIf="loading" class="text-yellow-400 animate-pulse mb-4 flex items-center gap-2">
        <span class="text-2xl">⏳</span> Cargando mensajes...
      </div>

      <!-- ERROR MESSAGE -->
      <div *ngIf="errorMessage" class="p-4 bg-red-900/80 border border-red-500 rounded text-white mb-4">
        ❌ Error: {{ errorMessage }}
      </div>

      <!-- EMPTY STATE -->
      <div *ngIf="!loading && messages.length === 0" class="text-gray-500 italic p-4 border border-gray-700 rounded text-center">
        📭 No hay mensajes pendientes.
      </div>

      <!-- LISTA DE MENSAJES -->
      <div class="grid gap-4">
        <div *ngFor="let msg of messages" class="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-cyan-500 transition shadow-lg relative group">
          
          <!-- BOTÓN ELIMINAR (CON DIAGNÓSTICO) -->
          <button (click)="onDelete(msg.id)" 
                  class="absolute top-4 right-4 bg-red-900/50 hover:bg-red-600 text-red-200 hover:text-white w-10 h-10 rounded-full transition z-10 flex items-center justify-center border border-red-800/50"
                  title="Eliminar permanentemente">
            🗑️
          </button>

          <!-- DATOS DEL MENSAJE -->
          <div class="flex justify-between items-start mb-3 border-b border-gray-700 pb-2 pr-12">
            <div>
              <h3 class="font-bold text-lg text-green-400">{{ msg.name }}</h3>
              <div class="text-sm text-cyan-200">✉️ {{ msg.email }}</div>
            </div>
            <span class="text-xs text-gray-400 bg-black/50 px-2 py-1 rounded border border-gray-600">
              {{ msg.sentAt | date:'medium' }}
            </span>
          </div>

          <div class="font-bold text-white mb-2 text-lg">
            ASUNTO: <span class="text-purple-300">{{ msg.subject }}</span>
          </div>

          <p class="text-gray-300 bg-black/30 p-3 rounded whitespace-pre-wrap font-sans text-sm leading-relaxed border border-gray-700/50">
            {{ msg.content }}
          </p>

        </div>
      </div>
    </div>
  `
})
export class AdminComponent implements OnInit {
  messages: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(private service: MessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.service.getMessages().subscribe({
      next: (response: any) => {
        console.log('📦 DATA CARGADA:', response);

        // Lógica para detectar si viene paginado o array directo
        if (response && response.content) {
          this.messages = response.content;
        } else if (Array.isArray(response)) {
          this.messages = response;
        } else {
          this.messages = [];
        }

        this.loading = false;
        this.cdr.detectChanges(); // Forzar actualización de vista
      },
      error: (err) => {
        console.error('Error cargando mensajes:', err);
        this.errorMessage = 'No se pudo conectar al servidor.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  // --- FUNCIÓN DE ELIMINAR CON DIAGNÓSTICO ---
  onDelete(id: number) {
    if(confirm('¿Estás seguro de ELIMINAR este mensaje permanentemente?')) {
      
      console.log('🗑️ Intentando eliminar ID:', id);

      this.service.deleteMessage(id).subscribe({
        next: () => {
          console.log('✅ Éxito: Backend respondió OK.');
          
          // Actualizar UI solo si el backend confirmó
          this.messages = this.messages.filter(m => m.id !== id);
          this.cdr.detectChanges();
          
          alert('Mensaje eliminado correctamente.');
        },
        error: (err) => {
          console.error('❌ FALLÓ EL DELETE:', err);
          
          // MOSTRAR ERROR EXACTO AL USUARIO
          let errorMsg = `Error al eliminar: ${err.status}`;
          if (err.status === 401 || err.status === 403) {
            errorMsg += ' (Permiso denegado / Contraseña incorrecta)';
          } else if (err.status === 404) {
            errorMsg += ' (El mensaje ya no existe)';
          } else if (err.status === 0) {
            errorMsg += ' (Posible bloqueo CORS o servidor caído)';
          }
          
          alert(errorMsg);
        }
      });
    }
  }
}
