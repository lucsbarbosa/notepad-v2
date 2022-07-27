import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteGuard } from './guards/notes.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign',
    pathMatch: 'full',
  },
  {
    path: 'sign',
    loadChildren: () =>
      import('./modules/sign/sign.module').then((m) => m.SignModule),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./modules/notes/notes.module').then((m) => m.NotesModule),
    canActivate: [NoteGuard]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
