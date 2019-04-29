import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

import { MatDividerModule, MatCardModule, MatTooltipModule } from '@angular/material';
@NgModule({
	declarations: [ AppComponent, HeaderComponent, ProjectsPageComponent, HomePageComponent, FooterComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatDividerModule,
		MatCardModule,
		MatTooltipModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
