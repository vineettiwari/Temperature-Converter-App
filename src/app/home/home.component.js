"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_myremoteservice_1 = require("../app.myremoteservice");
var HomeComponent = (function () {
    function HomeComponent(_remoteService) {
        this._remoteService = _remoteService;
        this.title = 'Temprature Converter';
        this.convertedTemprature = null;
        this.message = null;
    }
    HomeComponent.prototype.convertToC = function (temperature) {
        var _this = this;
        console.log('Convert to C');
        // this.convertedTemprature = temperature;
        this._remoteService.getCelsius(temperature)
            .subscribe(function (data) {
            _this.convertedTemprature = Math.round(+data["Celsius"]);
            _this.message = temperature + " F ⟺ " + _this.convertedTemprature + " C";
            console.log(data["Celsius"]);
            console.log(data);
        });
    };
    HomeComponent.prototype.convertToF = function (temperature) {
        var _this = this;
        console.log('Convert to F');
        // this.convertedTemprature = temperature;
        this._remoteService.getFahrenheit(temperature)
            .subscribe(function (data) {
            _this.convertedTemprature = Math.round(+data["Fahrenheit"]);
            _this.message = temperature + " C ⟺ " + _this.convertedTemprature + " F";
            console.log(data["Fahrenheit"]);
            console.log(data);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map