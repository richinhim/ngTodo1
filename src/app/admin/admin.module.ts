import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {AdminRoutingModule} from "./admin.routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatPaginatorModule, MatSnackBar, MatSnackBarModule
} from "@angular/material";
import {AdminService} from "./admin.service";
import {ViewComponent} from "./news/view/view.componen";
import {CKEditorModule} from "ng2-ckeditor";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatPaginatorModule,
    CKEditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent, ViewComponent],
  providers: [AdminService]
})
export class AdminModule { }
