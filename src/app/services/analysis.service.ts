import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private http: HttpClient) { }

  public getResult(file: File): Observable<HttpResponse<Blob>> {
    const uri = 'http://127.0.0.1:5000/predict';
    const formData: FormData = new FormData();
    formData.append('image_file', file, file.name);
    return this.http.post(uri, formData, {observe: 'response', responseType: 'blob'});
  }
}
