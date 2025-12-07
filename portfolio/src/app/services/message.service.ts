import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Message {
  name: string;
  email: string;
  subject: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'https://portfolio-3fy9.onrender.com/api/v1/messages';

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<Message> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Message>(this.apiUrl, message, { headers });
  }
}
