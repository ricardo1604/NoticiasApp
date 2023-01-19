import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  token = '157947b0ce4947a78e18f895e9d63366';

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais + '&category='
                + parametros.categoria + '&apiKey=' + this.token

    return this.http.get(URL);
  }

}
