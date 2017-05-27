import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppRouting } from './app-routing';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FeedbackComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
