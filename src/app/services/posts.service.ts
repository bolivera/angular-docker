import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private urlApi = environment.api
  private appID = '6167052e6281a548a9367587'
  constructor(
    private http: HttpClient,

  ) {

  }

  getAllPost() {
    let headers = new HttpHeaders;
    headers = headers.set('app-id', this.appID);
    return this.http.get(`${this.urlApi}/post?limit=10`, { headers })
      .pipe(
        map((res: any) => {
          return res
        })
      )
  }

  getPostUser(id: string) {
    let headers = new HttpHeaders;
    headers = headers.set('app-id', this.appID);
    return this.http.get(`${this.urlApi}/user/${id}/post?limit=10`, { headers })
      .pipe(
        map((res: any) => {
          return res
        })
      )
  }

  getDatosUser(id: string) {
    let headers = new HttpHeaders;
    headers = headers.set('app-id', this.appID);
    return this.http.get(`${this.urlApi}/user/${id}`, { headers })
      .pipe(
        map((res: any) => {
          return res
        })
      )
  }
}
