import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../../../_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim = [];
  constructor(private quanLyPhimService: QuanLyPhimService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim() {
    this.quanLyPhimService.layDanhSachPhim().subscribe((data:any) => {
      this.danhSachPhim = data;
      console.log(data);
    })
  }
}
