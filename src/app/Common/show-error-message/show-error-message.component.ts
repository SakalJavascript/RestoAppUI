import { Component, Input, OnInit } from '@angular/core';
import { ValidationType } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-show-error-message',
  templateUrl: './show-error-message.component.html',
  styleUrls: ['./show-error-message.component.css']
})
export class ShowErrorMessageComponent implements OnInit {
  
  @Input()
  Errors:{ [key: number]: string; } | undefined;

  validationType=ValidationType;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Errors)
  }

}
