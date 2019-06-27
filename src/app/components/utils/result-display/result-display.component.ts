import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input() baseImageToShow: File;
  @Input() heatImageToShow: string | ArrayBuffer;
  @Input() levelToShow: string;
  @Input() valuesToShow: string[];
  headers: string[] = ['Healthy', 'Sick'];

  constructor() { }

  ngOnInit() {
  }

  getStyle(level) {
    if (this.levelToShow === level) {
      return {
        color: 'darkred',
        'font-size': 'large'
      };
    }
    return {};
  }
}
