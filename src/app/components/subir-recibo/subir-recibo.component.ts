import { Component } from '@angular/core';
import { AlquilerService } from 'src/app/services/alquiler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subir-recibo',
  template: `
  <div class="container ">
   <div class="text-center">
     <h1><span>Ingrese el comprobante de pago</span></h1><br>
    
     <p>Para finalizar el proceso de registro y alquiler de bicicletas, es imprescindible que cargue una imagen que contenga el comprobante de transferencia bancaria. Esto nos permitirá confirmar los datos proporcionados.</p>
     <div class="captcha1" >
     <re-captcha (resolved)="resolved($event)" siteKey="6LdXWWcmAAAAAEBzP7kGaFJvNOUw6wJL7RGc6o4e"></re-captcha></div><br>
     <button class="btn btn-primary" (click)="showImageUploadAlert()"><span>Subir imagen</span></button>
   </div>
 </div>`
 ,
  styles: [`
  .image-upload-button {
    padding: 10px 20px;
    background-color: #2196f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  .container {
    height: 90%;
    width: 50%;
    border: 2px solid black;
    border-radius:15px;
    margin: 10% 27% 2%;
  }
  h1{
    text-align:center;
    font-family: Arial;
    margin:25px;
  }
  p{
    color: blue;
    text-align:center;
    font-family: Arial;
    margin:25px;
  }
  .captcha1{
    margin: 25px 182px 10px;
  }
  .btn{
    background-color:#63AADF;
    border-radius: 5px;
    margin: 5% 42% 4% 42%;
    padding: 10px
  }
  .btn-primary:hover {
  color: black;
  background-color:#4DD52C;
  border-color: #285e8e; /*set the color you want here*/
}
  
`]
})
export class SubirReciboComponent {
  imageUrl: string;
  captchaValid: boolean = false;


  constructor(public alquilerService: AlquilerService){}

  showImageUploadAlert() {
    // Verificar que el captcha haya sido completado
    if (!this.captchaValid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete el captcha',
        icon: 'error'
      });
      return;
    }

    Swal.fire({
      title: 'Seleccionar imagen',
      input: 'file',
      inputAttributes: {
        'accept': '.png',
        'aria-label': 'Subir tu foto de perfil'
      },
      showCancelButton: true,
      confirmButtonText: 'Subir',
      cancelButtonText: 'Cancelar',
      preConfirm: (file) => {
        return new Promise((resolve, reject) => {
          if (file) {
            if (this.isFileTypeValid(file, 'image/png')) {
              const reader = new FileReader();
              reader.onload = (e: any) => {
                this.imageUrl = e.target.result;
                resolve({
                  file: file,
                  imageUrl: this.imageUrl
                });
              };
              reader.readAsDataURL(file);
              console.log(file)
              this.alquilerService.subirRecibo(file,file).subscribe(res =>{
                console.log(res);
              })
            } else {
              reject('El archivo seleccionado no es una imagen PNG válida.');
            }
          } else {
            resolve(null);
          }
        });
      }
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Imagen cargada correctamente',
          imageUrl: this.imageUrl,
          imageAlt: 'Imagen cargada correctamente'
        });
      }
    }).catch((error) => {
      Swal.fire({
        title: 'Error',
        text: error,
        icon: 'error'
      });
    });
  }

  resolved(captchaResponse: string) {
    this.captchaValid = ( captchaResponse && captchaResponse.length > 0)? true:false;
  }

  isFileTypeValid(file: File, fileType: string): boolean {
    return file.type === fileType;
  }
}

