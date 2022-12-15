import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor() {}

  static capitalize(text: String): String {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
