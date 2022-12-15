import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor() {}

  /**
   * Método estático que capitaliza cada palabra de una cadena de texto.
   * @param texto
   * @return String
   */
  static capitalize(texto: String): String {
    var out: String = '';

    // Split mediante regex (seperar por cada 1 o más 'whitespaces')
    var palabras: String[] = texto.split(/\s+/);
    for (var palabra of palabras) {
      out += palabra.charAt(0).toUpperCase() + palabra.slice(1) + ' ';
    }

    return out;
  }
}
