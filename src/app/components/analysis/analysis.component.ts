import {Component, OnInit} from '@angular/core';
import {AnalysisService} from '../../services/analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  file1: File;
  file2: File;
  analyzeDone = false;
  loading = false;
  imageToShow1: string | ArrayBuffer;
  imageToShow2: string | ArrayBuffer;

  constructor( private analysisService: AnalysisService) { }

  ngOnInit() {
  }

  requestAnalyze() {
    console.log(this.file1, this.file2);
    this.loading = true;
    if (this.file1 != null) {
      this.analysisService.getResult(this.file1)
        .subscribe(x => {
          console.log(x.headers);
          const newBlob = new Blob([x.body], { type: 'image/jpeg' });
          const reader = new FileReader();
          reader.onloadend = () => {
            this.imageToShow1 = reader.result;
          };
          reader.readAsDataURL(newBlob);
          this.loading = false;
          this.analyzeDone = true;
        });
    }
    if (this.file2 != null) {
      this.analysisService.getResult(this.file2)
        .subscribe(x => {
          console.log(x.headers);
          const newBlob = new Blob([x.body], { type: 'image/jpeg' });
          const reader = new FileReader();
          reader.onloadend = () => {
            this.imageToShow2 = reader.result;
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
    this.imageToShow1 = undefined;
    this.imageToShow2 = undefined;
    this.loading = false;
  }
}
