import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'https://portfolio-3fy9.onrender.com/api/v1';

  constructor(private http: HttpClient) { }

  sendMessage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/messages`, data);
  }

  getMessages(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic YWRtaW46TG9wZXoyMDAz' 
    });
    return this.http.get(`${this.apiUrl}/admin/messages`, { headers });
  }

  // --- NUEVO: Función para ELIMINAR usando tu endpoint existente ---
  deleteMessage(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic YWRtaW46TG9wZXoyMDAz' 
    });
    // Llama a tu endpoint: DELETE /api/v1/admin/messages/{id}
    return this.http.delete(`${this.apiUrl}/admin/messages/${id}`, { headers });
  }
}
