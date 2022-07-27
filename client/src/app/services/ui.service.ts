import { Injectable } from '@angular/core';

@Injectable()
export class UiService {
  data: Omit<apiReturn, 'id'> = {
    username: '',
    notes: [],
  };

  constructor() {}

  changeData(newData: Omit<apiReturn, 'id'>) {
    this.data = newData;
  }
}
