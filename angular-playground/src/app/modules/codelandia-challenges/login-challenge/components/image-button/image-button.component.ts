import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent implements OnInit {
  @Input() imgPath: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
