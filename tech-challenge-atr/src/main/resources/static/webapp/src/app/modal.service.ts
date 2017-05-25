import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  constructor() { }

  error(errorMsg:any){
    alert(errorMsg);
  }

}
