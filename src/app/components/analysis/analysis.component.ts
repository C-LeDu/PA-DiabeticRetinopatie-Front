import {Component, OnInit} from '@angular/core';
import {AnalysisService} from '../../services/analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor( private analysisService: AnalysisService) { }
  file1: File;
  file2: File;
  analyzeDone = false;
  loading = false;
  leftImageToShow: string | ArrayBuffer;
  rightImageToShow: string | ArrayBuffer;
  leftLevelToShow: string;
  rightLevelToShow: string;
  leftValuesToShow: string[];
  rightValuesToShow: string[];

  static getValuesFromHeader(header: string): string[] {
    return header.split('=')[1].replace('.jpeg', '').split('_')[1].split('-');
  }

  static getCatFromHeader(header: string): string {
    return header.split('=')[1].replace('.jpeg', '').split('_')[0];
  }

  ngOnInit() {
  }

  requestAnalyze() {
    console.log(this.file1, this.file2);
    this.loading = true;
    if (this.file1 != null) {
      this.analysisService.getResult(this.file1)
        .subscribe(x => {
          // attachment; filename=3.jpeg
          this.leftLevelToShow = AnalysisComponent.getCatFromHeader(x.headers.get('content-disposition'));
          this.leftValuesToShow = AnalysisComponent.getValuesFromHeader(x.headers.get('content-disposition'));
          const newBlob = new Blob([x.body], { type: 'image/jpeg' });
          const reader = new FileReader();
          reader.onloadend = () => {
            this.leftImageToShow = reader.result;
          };
          reader.readAsDataURL(newBlob);
          this.loading = false;
          this.analyzeDone = true;
        });
    }
    if (this.file2 != null) {
      this.analysisService.getResult(this.file2)
        .subscribe(x => {
          this.rightLevelToShow = AnalysisComponent.getCatFromHeader(x.headers.get('content-disposition'));
          this.rightValuesToShow = AnalysisComponent.getValuesFromHeader(x.headers.get('content-disposition'));
          const newBlob = new Blob([x.body], { type: 'image/jpeg' });
          const reader = new FileReader();
          reader.onloadend = () => {
            this.rightImageToShow = reader.result;
          };
          reader.readAsDataURL(newBlob);
          this.loading = false;
          this.analyzeDone = true;
        });
    }
  }

  restartAnalyze() {
    this.loading = true;
    this.analyzeDone = false;
    this.file1 = undefined;
    this.file2 = undefined;
    this.leftImageToShow = undefined;
    this.rightImageToShow = undefined;
    this.leftLevelToShow = undefined;
    this.rightLevelToShow = undefined;
    this.loading = false;
  }
}
