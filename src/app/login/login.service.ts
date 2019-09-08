import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable( { 
  providedIn : "root" 
})
  export class LoginService {

    constructor(private http:HttpClient ) {}

     login(data){
      //  return this.http.post("https://bulbulstudio.com/auth/local", data).pipe(map(data =>{
       return this.http.post("http://dev.bulbulstudio.com/auth/local", data).pipe(map(data =>{
            return data;
          })
        ); 
     }

  }