import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient :HttpClient) { }
  
  signup(data:object):Observable<any>{
    return this.httpClient.post(`${environment.baseURL}users/signup`, data)
  }

  signin(data:object):Observable<any>{
    return this.httpClient.post(`${environment.baseURL}users/signin`, data)
  }

  changePassword(data:object):Observable<any>{
    return this.httpClient.patch(`${environment.baseURL}users/change-password`, data)
  }

  uploadProfilePhoto(data:object):Observable<any>{
    return this.httpClient.patch(`${environment.baseURL}users/upload-photo`, data)

  }

  getLoggedUserData(data:object):Observable<any>{
    return this.httpClient.patch(`${environment.baseURL}users/upload-photo`, data)

  }

}
