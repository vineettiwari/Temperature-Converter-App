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
var app_myremoteservice_1 = require("./app.myremoteservice");
// This component consumes the re-usable service.
var AppComponent = (function () {
    // Since using a provider above we can receive service.
    function AppComponent(_remoteService) {
        this.remoteService = _remoteService;
    }
    AppComponent.prototype.convertToC = function () {
        this.remoteService.getCelsius(this.temprature)
            .subscribe(function (data) {
            var temp = JSON.stringify(data);
            console.log(temp);
        });
    };
    AppComponent.prototype.convertToF = function () {
        var _this = this;
        this.remoteService.getFahrenheit(this.temprature)
            .subscribe(
        // Success.
        function (data) {
            _this.names = data;
            console.log(JSON.stringify(data));
            var x = data["Fahrenheit"];
            var y = 0;
            console.log("x:", x);
        }, 
        // Error.
        function (error) {
            alert(error);
        }, 
        // Final Instructions.
        function () {
            console.log("Finished");
        });
    };
    AppComponent.prototype.postFeedback = function () {
        var _this = this;
        // Create the JavaScript object in the format
        // required by the server.
        var FeedBackObject = {
            "Email": this.emailAddress,
            "Message": this.feedbackMsg
        };
        this.remoteService.postName(FeedBackObject)
            .subscribe(
        // Success.
        function (data) {
            _this.feedbackResponseMsg = data["Message"];
            _this.feedbackResponseStatus = data["Status"];
            console.log(data);
        }, 
        // Error.
        function (error) {
            alert(error);
        }, 
        // Final instructions.
        function () {
            console.log("Finished");
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " \n                <!-- Submit feedback -->\n                Email: <input [(ngModel)]=\"emailAddress\"><br/>\n                Feedback:  <input [(ngModel)]=\"feedbackMsg\">\n                <button (click)=\"postFeedback()\">Submit Feedback</button>\n\n                <!-- Show result from Post -->\n                <div *ngIf=\"feedbackResponseMsg\">\n                    {{feedbackResponseMsg}}<br/>\n                    {{feedbackResponseStatus}}\n                </div> \n                <br/>\n                <input [(ngModel)]=\"temprature\">\n                <button (click)=\"convertToF()\">Get Fahrenheit</button><br/>\n                <button (click)=\"convertToC()\">Get Celsius</button><br/>\n    ",
        // Providers allow us to inject an object instance through the constructor.
        providers: [app_myremoteservice_1.MyRemoteService]
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map