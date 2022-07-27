import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RoutesService } from 'src/app/services/routes.service';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.sass'],
})
export class SignComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private dataService: DataService,
    private uiService: UiService,
    private routesService: RoutesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  Login(): void {
    this.dataService.Get(this.username, this.password).subscribe((data) => {
      this.uiService.changeData({ username: data.username, notes: data.notes });
      this.routesService.changeNotesRouteAccess(true);
      this.router.navigate(['notes'], {relativeTo: this.route.parent});
    });
  }
}
