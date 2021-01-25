import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseFilterControlComponent } from './browse/browse-filter-control/browse-filter-control.component';
import { BrowseInterfaceDisplayComponent } from './browse/browse-interface-display/browse-interface-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    BrowseFilterControlComponent,
    BrowseInterfaceDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
