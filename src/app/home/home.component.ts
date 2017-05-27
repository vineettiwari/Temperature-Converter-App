import { Component } from '@angular/core';
import { MyRemoteService } from '../app.myremoteservice';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    title: string = 'Temprature Converter';
    convertedTemprature: number = null;
    message: string = null;

    constructor(private _remoteService: MyRemoteService) { }

    convertToC(temperature: string) {
        console.log('Convert to C');
        // this.convertedTemprature = temperature;
        this._remoteService.getCelsius(temperature)
            .subscribe(data => {
                this.convertedTemprature = Math.round(+data["Celsius"]);
                this.message = temperature + " F ⟺ " + this.convertedTemprature + " C";
                console.log(data["Celsius"]);
                console.log(data);
            });
    }

    convertToF(temperature: string) {
        console.log('Convert to F');
        // this.convertedTemprature = temperature;
        this._remoteService.getFahrenheit(temperature)
            .subscribe(data => {
                this.convertedTemprature = Math.round(+data["Fahrenheit"]);
                this.message = temperature + " C ⟺ " + this.convertedTemprature + " F";
                console.log(data["Fahrenheit"]);
                console.log(data);
            });
    }
}