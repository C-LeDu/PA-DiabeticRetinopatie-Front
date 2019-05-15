import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  file1: File;
  file2: File;
  analyzeDone = false;

  constructor() { }

  ngOnInit() {
  }

}
