import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;

  constructor() { }

  ngOnInit() {
  }

  handleDrop(e) {
    e.preventDefault();
    const files: File = e.dataTransfer.files;
    const s = Object.keys(files).pop();
    const file: File = files[s];
    console.log(file);
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


}
