import { Component, OnInit } from '@angular/core';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-solicitudes-f1',
  templateUrl: './solicitudes-f1.component.html',
  styleUrls: ['./solicitudes-f1.component.css']
})
export class SolicitudesF1Component implements OnInit{


  ngOnInit(): void {
    this.cargarDatos();
  }

  alquileresf1: any;


  constructor(public alquilerService: AlquilerService,
    public authService: AuthService){}

  cargarDatos(){
    this.alquilerService.obtenerTodosF1().subscribe(res=>{
      this.alquileresf1 = res;
      for(let i = 0; i < this.alquileresf1.length; i++){
        if(this.alquileresf1[i].estadof1 == true){
          this.alquileresf1[i].estadof1t = 'Aceptado';
        } else {
          this.alquileresf1[i].estadof1t = 'Rechazado';
        }
      }
      console.log(this.alquileresf1);
    });
  }

  actualizarAlquiler(id:any,estado : boolean){
    this.alquilerService.actualizarAlquilerF1(id,{estadof1:estado}).subscribe(res=>{
      this.cargarDatos();
  });
  }
}
