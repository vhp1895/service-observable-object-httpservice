import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {path: "", component: TrangChuComponent},

            { path: "dsphim", loadChildren: "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule" },

            { path: "phong-ve/:maLichChieu", loadChildren: "./phong-ve/phong-ve.module#PhongVeModule" }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
