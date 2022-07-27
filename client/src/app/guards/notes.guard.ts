import { Injectable, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RoutesService } from '../services/routes.service';

@Injectable({
  providedIn: 'root',
})
export class NoteGuard implements CanActivate, OnInit {
  permission: boolean = false;

  constructor(private routesService: RoutesService) {}

  ngOnInit(): void {
    this.routesService.currentNotesRouteAccess.subscribe((permission) => {
      this.permission = permission;
    });
  }

  canActivate() {
    return this.permission;
  }
}
