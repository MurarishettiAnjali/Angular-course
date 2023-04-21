import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient) { }
  getTestimonial():Observable<any>{
    return this.http.get("http://localhost:4500/feedbacks")
  }

}
