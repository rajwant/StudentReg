import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
isactive=false;





setisactive(val: boolean) {
  this.isactive = val;
}
  constructor() { }
  isLogin():boolean{
    return this.isactive;
  }
}
