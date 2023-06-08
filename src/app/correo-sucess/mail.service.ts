import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      // Configuración del servicio de correo
      service: 'nombre-del-servicio-de-correo',
      auth: {
        user: 'correo-remitente',
        pass: 'contraseña-del-correo-remitente'
      }
    });
  }

  enviarCorreo(destinatario: string, asunto: string, contenido: string): Promise<any> {
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'correo-remitente',
      to: destinatario,
      subject: asunto,
      html: contenido
    };

    return this.transporter.sendMail(mailOptions);
  }
}
