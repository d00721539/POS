import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient,private storage:Storage) { }

  get(url) {
      return this.http.get(url);
  }

  post(url, data) {
      return this.http.post(url, data);
  }

  put(url, data) {
      return this.http.put(url, data);
  }
  delete(url) {
    return this.http.delete(url);
}
  login() {
  }

  logout() {
      // remove user from local storage to log user out
      this.storage.remove('currentUser');
  }

  isLoggedIn() {
      if (this.storage.get('currentUser')) {
          return true;
      } else {
          return false;
      }
  }

  getCurrentUser(){
      return this.storage.get('currentUser');
  }
  isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }
}
