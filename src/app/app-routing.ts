import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';


export const AppRouters: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRouters);