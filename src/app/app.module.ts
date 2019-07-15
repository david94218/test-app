import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ModeComponent } from './mode/mode.component';
import { DateComponent } from './date/date.component';
import { FolderComponent } from './folder/folder.component';
import { ImagesComponent } from './images/images.component';
import { ImageService } from './shared/image.service';
import { AppRoutingModule } from './app-routing.module';

import { AlertModule, ButtonsModule, ModalModule, CarouselModule, CollapseModule } from 'ngx-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { UserDefineFolderComponent } from './user-define-folder/user-define-folder.component';
import { LikeModeListComponent } from './like-mode-list/like-mode-list.component';
import { AlbumModeListComponent } from './album-mode-list/album-mode-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ModeComponent,
    DateComponent,
    FolderComponent,
    ImagesComponent,
    NewFolderComponent,
    UserDefineFolderComponent,
    LikeModeListComponent,
    AlbumModeListComponent
  ],
  imports: [
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    InfiniteScrollModule],
    providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
