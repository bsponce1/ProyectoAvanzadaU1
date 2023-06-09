import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    // Implementa aquí la lógica de autenticación y autorización
    // Por ejemplo, puedes verificar si el usuario ha iniciado sesión o si tiene los permisos necesarios
    const isAuthenticated = true; // Verificar si el usuario está autenticado

    if (isAuthenticated) {
      return true; // Permitir el acceso a la ruta protegida
    } else {
      this.router.navigate(['/formulario']); // Redirigir al formulario si el usuario no está autenticado
      return false; // Denegar el acceso a la ruta protegida
    }
  }
}
