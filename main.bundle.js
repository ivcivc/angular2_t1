webpackJsonp([2,4],{

/***/ 1478:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1479:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}} \n</h1>\n\n <dx-button text=\"Press me\" (onClick)=\"helloWorld()\"></dx-button>\n <div > <dx-text-box [(ngModel)]=\"msg\" > </dx-text-box> </div>\n <div> {{msg}} </div>\n\n<div class=\"form\">\n    <div class=\"dx-fieldset\">\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Código</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box [(ngModel)]=\"cliente.id\" value=\"\"></dx-text-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Nome</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box [(ngModel)]=\"cliente.nome\" value=\"\"></dx-text-box>\n            </div>\n        </div>        \n    </div>   \n </div> \n\n <div class=\"form\">\n    <div class=\"dx-fieldset\">\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Checked</div>\n            <div class=\"dx-field-value\">\n                <dx-check-box [value]=\"true\"></dx-check-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Unchecked</div>\n            <div class=\"dx-field-value\">\n                <dx-check-box [value]=\"false\"></dx-check-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Indeterminate</div>\n            <div class=\"dx-field-value\">\n                <dx-check-box [(value)]=\"indeterminateValue\"></dx-check-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Value change handling</div>\n            <div class=\"dx-field-value\">\n                <dx-check-box [(value)]=\"checkBoxValue\"></dx-check-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Disabled</div>\n            <div class=\"dx-field-value\">\n                <dx-check-box\n                    [disabled]=\"true\"\n                    [value]=\"checkBoxValue\"\n                ></dx-check-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">With label</div>\n            <div class=\"dx-field-value\">\n                <dx-check-box\n                    [value]=\"true\"\n                    [width]=\"80\"\n                    text=\"Check\"\n                ></dx-check-box>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"form\">\n    <div class=\"dx-fieldset\">\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Default mode</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box [(ngModel)]=\"msg\" value=\"John Smith\"></dx-text-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">With placeholder</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box placeholder=\"Enter full name here...\"></dx-text-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">With clear button</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box value=\"John Smith\" [showClearButton]=\"true\">\n                </dx-text-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Password mode</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box\n                    mode=\"password\"\n                    placeholder=\"Enter password\"\n                    [showClearButton]=\"true\"\n                    value=\"f5lzKs0T\"\n                ></dx-text-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Text mask</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box mask=\"+1 (X00) 000-0000\" [maskRules]=\"rules\">\n                </dx-text-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Disabled</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box value=\"John Smith\" [disabled]=\"true\">\n                </dx-text-box>\n            </div>\n        </div>\n    </div>\n    <div class=\"dx-fieldset\">\n        <div class=\"dx-fieldset-header\">Events and API</div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Full Name</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box\n                    value=\"Smith\"\n                    [showClearButton]=\"true\"\n                    placeholder=\"Enter full name\"\n                    valueChangeEvent=\"keyup\"\n                    (onValueChanged)=\"valueChanged($event)\"\n                ></dx-text-box>\n            </div>\n        </div>\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Email (read only)</div>\n            <div class=\"dx-field-value\">\n                <dx-text-box\n                    [readOnly]=\"true\"\n                    [hoverStateEnabled]=\"false\"\n                    [(value)]=\"emailValue\"\n                ></dx-text-box>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 1502:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(860);


/***/ }),

/***/ 859:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 859;


/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(970);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Ivan/firebase/angular2-firebase/src/main.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { DxButtonModule } from 'devextreme-angular'; 
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2 com DEVEXPRESS';
        this.cliente = { id: 1, nome: "Ivan Oliveira" };
        this.emailValue = 'smith@corp.com';
        this.rules = { "X": /[02-9]/ };
    }
    AppComponent.prototype.valueChanged = function (data) {
        this.emailValue = data.value.replace(/\s/g, "").toLowerCase() + "@corp.com";
    };
    AppComponent.prototype.helloWorld = function () {
        console.log('Hello world!');
        this.msg = this.cliente.nome;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1479),
            styles: [__webpack_require__(1478)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Ivan/firebase/angular2-firebase/src/app.component.js.map

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_devextreme_angular__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_devextreme_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_devextreme_angular__["DxButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_devextreme_angular__["DxCheckBoxModule"],
                __WEBPACK_IMPORTED_MODULE_5_devextreme_angular__["DxTextBoxModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Ivan/firebase/angular2-firebase/src/app.module.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Ivan/firebase/angular2-firebase/src/environment.js.map

/***/ })

},[1504]);
//# sourceMappingURL=main.bundle.map