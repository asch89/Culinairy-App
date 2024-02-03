import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  findRecipes(list: Array<string>)
  {
    console.log(list);
    return this.http.post(environment.api + '/', list);
    
  }
}