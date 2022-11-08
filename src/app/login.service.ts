import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const localUrl = 'assets/data/smartphone.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // login(){
  //   return this.http.post('stgapi.pcmcsmartsarathi.org/')
  // }
}
