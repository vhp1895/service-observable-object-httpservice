import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { QuanLyPhimService } from "../../../_core/services/quan-ly-phim.service";
import { GheComponent } from './ghe/ghe.component';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {
  public maLichChieu: any;
  public danhSachGhe: any;
  public danhSachGheDangChon = [];
  @ViewChildren(GheComponent) listGhe: QueryList<GheComponent>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private quanLyPhimService: QuanLyPhimService
  ) { }

  ngOnInit() {
    this.getParams();
    this.getChiTietPhongVe();
    
  }

  getParams() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("maLichChieu");
  }

  getChiTietPhongVe() {
    this.quanLyPhimService
      .chiTietPhongVe(this.maLichChieu)
      .subscribe((data: any) => {
        this.danhSachGhe = data.DanhSachGhe;
        console.log(this.danhSachGhe);
      })
  }

  datGhe(ghe) {
    if(ghe.trangThai) {
      this.danhSachGheDangChon.push(ghe.sit);
    }
    else {
      this.danhSachGheDangChon.splice(this.danhSachGheDangChon.findIndex(item => item.STT === ghe.sit.STT), 1)
    }
  }

  huyGhe(index) {
    this.danhSachGheDangChon.splice(index, 1);
    this.listGhe.map(item => {
      if(item.sit.STT === (index + 1)) {
        item.trangThaiChon = false;
        console.log(item.trangThaiChon);
      }
    });

  }
}
