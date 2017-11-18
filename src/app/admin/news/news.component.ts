import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AdminService} from "../admin.service";
import {ResultVO} from "../../domain/result.vo";
import {PageVO} from "../../domain/page.vo";
import {NewsVO} from "../../domain/news.vo";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  newsList: Array<NewsVO>;
  // page = new PageVO(0, 1);

  constructor(private  adminService: AdminService) { }

  ngOnInit() {
    this.findNews();
  }

  findNews() {
    const page = {start_index: 0, page_size: 5};
    this.adminService.findNews(page)
      .subscribe((data: ResultVO) => {
        console.log(data);
        // this.newsList =   data;

      });

  }
}
