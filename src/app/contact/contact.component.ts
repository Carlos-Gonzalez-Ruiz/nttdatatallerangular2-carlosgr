import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() name!: String;
  @Input() surname!: String;
  @Input() age!: Number;
  @Output() fullname = new EventEmitter<CustomEvent>();

  constructor() {}

  ngOnInit() {}

  mostrarDatos() {
    this.fullname.emit(
      new CustomEvent('datos', {
        detail: {
          name: this.name,
          surname: this.surname,
          age: this.age,
        },
      })
    );
  }
}
