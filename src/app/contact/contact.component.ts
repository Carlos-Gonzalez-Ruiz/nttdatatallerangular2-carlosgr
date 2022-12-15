import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input('name') name: String;
  @Input('surname') surname: String;
  @Input('age') age: Number;
  @Input('fullname') fullname: Function;

  constructor() {}

  ngOnInit() {}

  mostrarDatos() {
    alert(this.name + ' ' + this.surname + ', ' + this.age + "\n" + this.fullname);
  }
}
