import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first.component';

const routes: Routes = [{ path: '', component: FirstComponent }];

@NgModule({
  declarations: [FirstComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class FirstModule {}
