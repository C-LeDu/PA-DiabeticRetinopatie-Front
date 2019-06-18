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
  imageToShow: string | ArrayBuffer;

  constructor( private analysisService: AnalysisService) { }

  ngOnInit() {
  }

  requestAnalyze() {
    console.log(this.file1, this.file2);
    this.loading = true;
    this.analysisService.getResult(this.file1)
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        const newBlob = new Blob([x], { type: 'image/jpeg' });
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageToShow = reader.result;
        };
        reader.readAsDataURL(newBlob);
        this.loading = false;
        this.analyzeDone = true;
      });
  }

}
