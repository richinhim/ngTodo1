import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AdminService} from "../admin.service";
import {ResultVO} from "../../domain/result.vo";
import {PageVO} from "../../domain/page.vo";
import {NewsVO} from "../../domain/news.vo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  newsList = new Array<NewsVO>();
  // page = new PageVO(0, 1);
  page = new PageVO(0, 5);

  constructor(private  adminService: AdminService, protected  router: Router) { }

  ngOnInit() {
    this.findNews();
  }

  findNews() {
    const page = {start_index: this.page.pageIndex * this.page.pageSize, page_size: this.page.pageSize};
    this.adminService.findNews(page)
      .subscribe((result: ResultVO) => { // result=> response 객체의 body다.
        console.log(result);
        this.newsList = result.data;
        this.page.totalCount = result.total;
      });

  }

  pageChanged(event: any) {
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.findNews();
  }

  gotoView(news: NewsVO) {
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
  }


  gotoWrite() {
    this.router.navigateByUrl('/admin/news/write');
  }

}
