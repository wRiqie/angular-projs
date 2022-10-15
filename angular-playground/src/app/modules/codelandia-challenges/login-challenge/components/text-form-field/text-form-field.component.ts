import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-form-field',
  templateUrl: './text-form-field.component.html',
  styleUrls: ['./text-form-field.component.scss']
})
export class TextFormFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
