import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'chess', loadChildren: './pages/chess1/chess.module#ChessPageModule' },
  { path: 'chess2', loadChildren: './pages/chess2/chess2.module#Chess2PageModule' },
  { path: 'chessboard-js', loadChildren: './pages/chessboard-js/chessboard-js.module#ChessboardJSPageModule' },
  { path: 'chess-js', loadChildren: './pages/chess-js/chess-js.module#ChessJSPageModule' },
  { path: 'realtime-chess', loadChildren: './pages/realtime-chess/realtime-chess.module#RealtimeChessPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
