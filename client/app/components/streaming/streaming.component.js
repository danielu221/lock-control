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
var camera_component_1 = require('../camera/camera.component');
var StreamingComponent = (function () {
    function StreamingComponent() {
        this.cameraSrc = "camera.mp4";
    }
    StreamingComponent.prototype.cameraStream = function (chosenCamera) {
        if (this.cameraSrc === chosenCamera)
            return;
        this.cameraSrc = chosenCamera;
    };
    StreamingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'streaming',
            template: "\n    \t\t\t<camera cameraName=\"Kamera 1\" (click)='cameraStream(\"camera.mp4\")'></camera>\n\t  \t\t\t<camera cameraName=\"Kamera 2\" (click)='cameraStream(\"camera2.mp4\")'></camera>\n\t  \t\t\t<camera cameraName=\"Kamera 3\" (click)='cameraStream(\"camera3.mp4\")'></camera>\n\t  \t\t\t<camera cameraName=\"Kamera 4\" (click)='cameraStream(\"camera4.mp4\")'></camera>\n          <div *ngIf=\"cameraSrc\">\n      \t\t\t<video width=\"800\" [src] = \"cameraSrc\" controls>\n  \t  \t\t\t\tYour browser does not support HTML5 video.\n  \t\t\t\t  </video>\n          </div>\n\t\t\t\t<p>Wy\u015Bwietlany plik : {{cameraSrc}}</p>\n    \t\t\t",
            directives: [camera_component_1.CameraComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], StreamingComponent);
    return StreamingComponent;
}());
exports.StreamingComponent = StreamingComponent;
//# sourceMappingURL=streaming.component.js.map