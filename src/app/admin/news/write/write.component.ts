import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NewsVO} from "../../../domain/news.vo";
import {MatSnackBar} from "@angular/material";
import {AdminService} from "../../admin.service";
import {Route} from "@angular/compiler/src/core";
import {Router} from "@angular/router";
import {ResultVO} from "../../../domain/result.vo";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WriteComponent implements OnInit {
  news = new NewsVO();
  fileList: FileList;
  constructor(private  snackBar: MatSnackBar, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  addNews() {
    // snackbar 구현부
    if (this.news.title) {
      this.snackBar.open("제목을 입력하세요.", null, {duration: 3000});
    }
    if (this.news.content) {
      this.snackBar.open("내을 입력하세요.", null, {duration: 3000});
    }
    //
    this.adminService.addNews(this.news).subscribe( (res: ResultVO ) => {
      // result 0이면 성공 스낵바 띠우고, 목록 보기로 이동
      if (res.result === 0) {
        this.snackBar.open("저장하였습니다..", null, {duration: 3000});
        this.router.navigateByUrl('/admin/news');
      }
    });
  }

  fileChange(event: any) {
    console.log(event);

    this.fileList = event.target.files;
    console.log(this.fileList);
    // show thumbnail
    const reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = () => {
      // this.thumbnailSrc = reader.result;
      this.imageUpload();
    }
  }

  imageUpload() {
    const formData: FormData = new FormData();
    if (this.fileList && this.fileList.length > 0) {
      const file: File = this.fileList[0];
      formData.append('file', file, file.name);
      this.adminService.imageUpload(formData);
    }
  }
}
