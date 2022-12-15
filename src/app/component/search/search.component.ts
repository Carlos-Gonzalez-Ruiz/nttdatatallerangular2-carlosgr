import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  busqueda: String;
  result: String;

  @Input() labelButton!: String;

  constructor() {}

  ngOnInit() {}

  search(query: String) {
    this.result = 'Resultado para la búsqueda "' + query + '"';
  }
}
