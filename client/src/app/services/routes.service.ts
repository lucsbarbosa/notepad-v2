import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RoutesService {
  notesRouteAccess = new BehaviorSubject<boolean>(false);
  currentNotesRouteAccess = this.notesRouteAccess.asObservable();

  constructor() { }

  changeNotesRouteAccess(permission: boolean) {
    this.notesRouteAccess.next(permission);
  }
}
