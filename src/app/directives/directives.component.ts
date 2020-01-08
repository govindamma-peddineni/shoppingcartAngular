import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
oddNumbers = [1, 3, 5, 7];
evenNumbers = [2, 4, 6];
onlyOdd = false;
value = 10;
  constructor() { }

  ngOnInit() {
  }

}
