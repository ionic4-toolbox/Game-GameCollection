import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChessboardJSPage } from './chessboard-js.page';

const routes: Routes = [
  {
    path: '',
    component: ChessboardJSPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChessboardJSPage]
})
export class ChessboardJSPageModule {}
