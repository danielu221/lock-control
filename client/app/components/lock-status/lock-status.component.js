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
var log_service_1 = require('../../services/log.service');
require('rxjs/add/operator/map');
var pin_service_1 = require('../../services/pin.service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var LockStatusComponent = (function () {
    function LockStatusComponent(_logService, _pinService) {
        this._logService = _logService;
        this._pinService = _pinService;
        this.opened = false;
    }
    LockStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logs = [];
        this._logService.getLogs()
            .map(function (res) { return res.json(); })
            .subscribe(function (logs) { return _this.logs = logs; });
        this.pin = [];
        this._pinService.getPassword()
            .map(function (res) { return res.json(); })
            .subscribe(function (pin) { return _this.pin = pin; });
    };
    /*
    addLog($event){
        if($event.which === 1){
            var result;
            var d=new Date();
            var newLog={
                datka: String(d),
                isCompleted: true
            };

            result=this._logService.saveLog(newLog);
            result.subscribe(x =>{this.logs.push(newLog)})
        }
    }*/
    LockStatusComponent.prototype.addLogg = function (pin) {
        var _this = this;
        var result;
        var d = new Date();
        var isCorrectPin;
        if (pin == this.pin[0].pin) {
            isCorrectPin = true;
        }
        else {
            isCorrectPin = false;
        }
        var newLog = {
            datka: String(d),
            isCompleted: isCorrectPin
        };
        result = this._logService.saveLog(newLog);
        result.subscribe(function (x) { _this.logs.push(newLog); });
        if (!isCorrectPin) {
            alert("Niepoprawny numer PIN!");
        }
        else {
            this.opened = true;
            setTimeout(function () {
                this.opened = false;
                console.log(this.opened);
            }.bind(this), 5000);
        }
    };
    LockStatusComponent.prototype.close = function () {
        this.modal.close();
    };
    LockStatusComponent.prototype.dismiss = function () {
        this.modal.dismiss();
    };
    LockStatusComponent.prototype.open = function () {
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild('myModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], LockStatusComponent.prototype, "modal", void 0);
    LockStatusComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lock-status',
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES],
            templateUrl: 'lock-status.component.html'
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService, pin_service_1.PinService])
    ], LockStatusComponent);
    return LockStatusComponent;
}());
exports.LockStatusComponent = LockStatusComponent;
//# sourceMappingURL=lock-status.component.js.map