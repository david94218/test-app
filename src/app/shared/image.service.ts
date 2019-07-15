import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService {
  private searchKey: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage = '&per_page=200';

  constructor(private http: Http) { }

  getImage(searchKey) {
    return this.http.get(this.URL + searchKey + this.perPage).pipe(
    map(res => res.json()));
  }

}
