import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent],
  imports: [
    CommonModule, HomeRoutingModule
  ]
})
export class HomeModule { }
