import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.css']
})
export class DropZoneComponent implements OnInit {
  imgURL: any;
  @Input() file: File;
  @Output() fileChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDrop(e) {
    e.preventDefault();
    this.file = e.dataTransfer.files[0];
    this.displayImage();
    this.fileChange.emit(this.file);
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  inputUpload(e) {
    this.file = (e.target as HTMLInputElement).files[0];
    this.displayImage();
    this.fileChange.emit(this.file);
  }

  deleteFile() {
    this.file = undefined;
    this.imgURL = undefined;
    this.fileChange.emit(this.file);
  }

  private displayImage() {
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }
}
