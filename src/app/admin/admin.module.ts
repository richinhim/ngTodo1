import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {AdminRoutingModule} from "./admin.routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule, MatCardModule} from "@angular/material";
import {AdminService} from "./admin.service";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent],
  providers: [AdminService]
})
export class AdminModule { }
