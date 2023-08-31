import { Component, OnInit } from '@angular/core';
import { AlquilerService } from 'src/app/services/alquiler.service';

@Component({
  selector: 'app-solicitudes-f2',
  templateUrl: './solicitudes-f2.component.html',
  styleUrls: ['./solicitudes-f2.component.css']
})
export class SolicitudesF2Component implements OnInit{
  ngOnInit(): void {
    this.cargarDatos();
  }

  alquileresf2: any;


  constructor(public alquilerService: AlquilerService){}

  cargarDatos(){
    this.alquilerService.obtenerTodosF2().subscribe(res=>{
      this.alquileresf2 = res;
      for(let i = 0; i < this.alquileresf2.length; i++){
        if(this.alquileresf2[i].estadof2 == true){
          this.alquileresf2[i].estadof2t = 'Aceptado';
        } else {
          this.alquileresf2[i].estadof2t = 'Rechazado';
        }
      }
      console.log(this.alquileresf2);
    });
  }

  actualizarAlquiler(id:any,estado : boolean){
    this.alquilerService.actualizarAlquilerF2(id,{estadof2:estado}).subscribe(res=>{
      this.cargarDatos();
    });
  }

  eliminarAlquiler(id:any){
    this.alquilerService.borrarAlquilerF2(id).subscribe(res=>{
      this.cargarDatos();
    });
  }
}
