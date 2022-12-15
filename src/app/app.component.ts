import { Component, VERSION } from '@angular/core';
import { UtilsService } from './service/utils.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /** Ejercicio 1 */
  nombreDelProgramador: String;
  fechaNacimiento: Date;

  /** Ejercicio 2 */
  urlAcademiaBinaria: String;
  nombreUsuario: String;
  usuarioAutenticado: Boolean;

  /** Ejercicio 3 */
  propiedad: String;

  /** Ejercicio 5 */
  age: Number = 19;

  /** Ejercicio 8 */
  textoOriginal: String = 'Verschwende deine Zeit - Edwin Rosen';
  textoCapitalized: String;

  constructor() {
    // Ejercicio 1
    this.nombreDelProgramador = 'Carlos González Ruiz';
    this.fechaNacimiento = new Date('2003/10/28');

    // Ejercicio 2
    this.urlAcademiaBinaria = 'https://github.com/Carlos-Gonzalez-Ruiz';
    this.usuarioAutenticado = false;
    this.nombreUsuario = 'Carlos';

    this.textoCapitalized = UtilsService.capitalize(this.textoOriginal);
  }

  onkey(event: KeyboardEvent) {
    alert('La letra que ha pulsado es: ' + event.key);
  }

  lanzarCohete() {
    if (this.propiedad.length == 0) {
      alert('Error, tiene que especificar un nombre.');
    } else {
      alert('El cohete ha sido lanzado por ' + this.propiedad);
    }
  }

  viewFullName(event: CustomEvent) {
    alert(
      event.detail.name + ' ' + event.detail.surname + ', ' + event.detail.age
    );
  }
}
