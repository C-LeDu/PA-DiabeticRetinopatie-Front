import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input() imageToShow: string | ArrayBuffer;
  @Input() levelToShow: string;
  @Input() valuesToShow: string[];
  headers: string[] = ['healthy', '1', '2', '3', '4'];

  constructor() { }

  ngOnInit() {
  }

  getBackgroundColor() {
    switch (this.levelToShow) {
      case '1': {
        return '#ffec19';
      }
      case '2': {
        return '#ffc100';
      }
      case '3': {
        return '#ff9800';
      }
      case '4': {
        return '#ff5607';
      }
      case '0': {
        return 'rgba(207, 207, 207, 0.39)';
      }
      default: {
        return '';
      }
    }
  }

  getColor() {
    if (this.levelToShow === '0') {
      return 'black';
    }
    return 'white';
  }
}
