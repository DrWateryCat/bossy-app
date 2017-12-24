import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Task } from '../../models/task';
import { Response } from '@angular/http/src/static_response';

/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksProvider {
  private apiUrl = 'http://todo-app-kraisbeck.azurewebsites.net/api'
  //private apiUrl = 'http://192.168.7.9:8080/api';

  constructor(public http: Http) {
    console.log('Hello TasksProvider Provider');
  }

  load(): Observable<Task[]> {
    return this.http.get(`${this.apiUrl}/todo`).map(res => <Task[]>res.json());
  }

  loadDetails(id: string): Observable<Task> {
    return this.http.get(`${this.apiUrl}/todo/${id}`).map(res => <Task>res.json());
  }

  upload(t: any): Observable<Response> {
    return this.http.post(`${this.apiUrl}/todo`, {title: t.title, desc: t.desc});
  }

  delete(id: string): Observable<Response> {
    return this.http.delete(`${this.apiUrl}/todo/${id}`);
  }

}
