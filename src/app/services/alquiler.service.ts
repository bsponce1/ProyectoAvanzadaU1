import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  readonly URL = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  obtenerTodosF1() {
    return this.http.get(this.URL + '/alquilerf1');
  }
  obtenerTodosF2() {
    return this.http.get(this.URL + '/alquilerf2');
  }
  registrarAlquiler(alquiler: any) {
    return this.http.post(this.URL+"/alquiler", alquiler);
  }
  actualizarAlquilerF1(id: any, estadof1: any) {
    return this.http.put(this.URL + '/alquilerf1/' + id, estadof1);
  }
  actualizarAlquilerF2(id: any, estadof1: any) {
    return this.http.put(this.URL + '/alquilerf2/' + id, estadof1);
  }
  borrarAlquilerF2(id: any) {
    console.log(id)
    return this.http.delete(this.URL + '/alquilerf2/' + id);
  }

  subirRecibo(id: any, recibo: any) {

    // Create form data
    const formData = new FormData(); 
        
    // Store form name as "file" with file data
    console.log(recibo.name)
    formData.append("file", recibo, recibo.name);
      
    return this.http.post(this.URL + '/subir-recibo/', formData)
  }
}
