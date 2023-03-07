import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) {
  }
  ////functiile de aici mapeaza la backend
  url="http://localhost:8080/";
 /// aceasta functie comunica cu backendul prin intermediul http se poate vedea in backend ca am mapat la aceeasi adresa
  //functia care face insereaza in baza de date
  public registerUser(user: any) {
    return this.http.post(this.url + 'register', user)
  }
//aceasta functie comunica cu backendul prin intermediul http se poate vedea in backend ca am mapat la aceeasi adresa
  //functia care face cautare in baza de date
  public loginUser(user:any) {
    return this.http.post(this.url+'login',user );
  }
  public  forgot (user:any) {
    return this.http.post(this.url+'forgot',user);
  }
}
