import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';

@NgModule({
  declarations: [DanhSachPhimComponent, ChiTietPhimComponent, ItemPhimComponent],
  imports: [
    CommonModule, DanhSachPhimRoutingModule
  ]
})
export class DanhSachPhimModule { }
