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
var core_1 = require('@angular/core');
var navbar_component_1 = require('./components/navbar/navbar.component');
var jumbotron_component_1 = require('./components/jumbotron/jumbotron.component');
var camera_component_1 = require('./components/camera/camera.component');
var logs_component_1 = require('./components/logs/logs.component');
var lock_status_component_1 = require('./components/lock-status/lock-status.component');
var streaming_component_1 = require('./components/streaming/streaming.component');
var photos_component_1 = require('./components/photos/photos.component');
var pin_service_1 = require('./services/pin.service');
var log_service_1 = require('./services/log.service');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    \t\t\t<navbar></navbar>\n    \t\t\t<div class=\"container\">\n\t    \t\t\t<jumbotron jumbotronText=\"Zdj\u0119cia osoby dzwoni\u0105cej\" ></jumbotron>\n\t    \t\t\t\t<photos></photos>\n\t  \t\t\t\t<jumbotron jumbotronText=\"Stan zamka\" ></jumbotron>\n\t  \t\t\t\t\t<lock-status></lock-status>\n\t  \t\t\t\t<jumbotron jumbotronText=\"Monitoring\" ></jumbotron>\n\t  \t\t\t\t\t<div class=\"row placeholders\">\n\t  \t\t\t\t\t\t<streaming></streaming>\n\t  \t\t\t\t\t</div>\t\t\t\t\n\t  \t\t\t</div>\n    \t\t\t",
            directives: [navbar_component_1.NavbarComponent, jumbotron_component_1.JumbotronComponent, camera_component_1.CameraComponent, logs_component_1.LogsComponent, lock_status_component_1.LockStatusComponent, streaming_component_1.StreamingComponent, photos_component_1.PhotosComponent],
            providers: [http_1.HTTP_PROVIDERS, log_service_1.LogService, pin_service_1.PinService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map