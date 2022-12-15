import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../../service/utils.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  busqueda: String;
  result: String;

  @Input() labelButton!: String;

  @Output() setAppResult = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  search(query: String) {
    this.result = 'Resultado para la búsqueda "' + query + '"';
    this.setAppResult.emit(UtilsService.capitalize(query));
  }
}
