webpackJsonp([27],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankaccPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer_transfer__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BankaccPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BankaccPage = /** @class */ (function () {
    function BankaccPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saveButton = __WEBPACK_IMPORTED_MODULE_2__transfer_transfer__["a" /* TransferPage */];
    }
    BankaccPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankaccPage');
    };
    BankaccPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bankacc',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/bankacc/bankacc.html"*/'<!--\n  Generated template for the BankaccPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      akalakal\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label>Bank Name</ion-label>\n        <ion-select [(ngModel)]="bankName">\n          <ion-option value="n">BNI</ion-option>\n          <ion-option value="c">BCA</ion-option>\n          <ion-option value="r">BRI</ion-option>\n          <ion-option value="m">Mandiri</ion-option>\n        </ion-select>\n    </ion-item>\n    \n    <ion-item>\n          <ion-label stacked>Account Bank Name</ion-label>\n          <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Account Number</ion-label>\n        <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <button ion-button block [navPush]="saveButton">Save</button>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/bankacc/bankacc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BankaccPage);
    return BankaccPage;
}());

//# sourceMappingURL=bankacc.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__konfirmasi_konfirmasi__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransferPage = /** @class */ (function () {
    function TransferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.confButton = __WEBPACK_IMPORTED_MODULE_2__konfirmasi_konfirmasi__["a" /* KonfirmasiPage */];
    }
    TransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferPage');
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/transfer/transfer.html"*/'<!--\n  Generated template for the TransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>transfer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label stacked>Enter Nominal</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <button ion-button [navPush]="confButton">Next</button>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/transfer/transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonfirmasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KonfirmasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KonfirmasiPage = /** @class */ (function () {
    function KonfirmasiPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    KonfirmasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KonfirmasiPage');
    };
    KonfirmasiPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Success!!',
            message: 'Transfer will be proceed in 24 hours',
            buttons: ['OK']
        });
        alert.present();
    };
    KonfirmasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-konfirmasi',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/konfirmasi/konfirmasi.html"*/'<!--\n  Generated template for the KonfirmasiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>konfirmasi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-label>To</ion-label>\n  <ion-label>From Virtual Wallet</ion-label>\n  <ion-label>Total</ion-label>\n\n  <button ion-button (click)="doAlert()">Transfer Now</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/konfirmasi/konfirmasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], KonfirmasiPage);
    return KonfirmasiPage;
}());

//# sourceMappingURL=konfirmasi.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuypromoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BuypromoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuypromoPage = /** @class */ (function () {
    function BuypromoPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    BuypromoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuypromoPage');
    };
    BuypromoPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Purchased Success!!',
            message: 'If your account does not appear in our social media in 24 hours, please contact our customer service',
            buttons: ['OK']
        });
        alert.present();
    };
    BuypromoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buypromo',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/buypromo/buypromo.html"*/'<!--\n  Generated template for the BuypromoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n\n  <p>\n      Promo ini bertujuan untuk promosi akun anda pada media sosial dalam kurun waktu tertentu.\n  </p>\n\n  <p>\n      Biaya\n  </p>\n\n  <p>\n    Rp 10.000\n  </p>\n\n  <p>\n      Fitur yang didapatkan: Instagram, Twitter, Website, Facebook\n  </p>\n\n  <button ion-button (click)="doAlert()">Buy</button>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/buypromo/buypromo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BuypromoPage);
    return BuypromoPage;
}());

//# sourceMappingURL=buypromo.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepassPage = /** @class */ (function () {
    function ChangepassPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    ChangepassPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Success!!',
            message: 'Your password is successfully changed!',
            buttons: ['OK']
        });
        alert.present();
    };
    ChangepassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepassPage');
    };
    ChangepassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepass',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/changepass/changepass.html"*/'<!--\n  Generated template for the ChangepassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align: center">Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Enter Your Old Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Enter Your New Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Confirm Your New Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block (click)="doAlert()">Save</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/changepass/changepass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChangepassPage);
    return ChangepassPage;
}());

//# sourceMappingURL=changepass.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepass_changepass__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChangePassButton = __WEBPACK_IMPORTED_MODULE_2__changepass_changepass__["a" /* ChangepassPage */];
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center">Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Full Name</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Phone Number</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <div padding>\n    <button ion-button block [navPush]="ChangePassButton">Change Password</button>\n  </div>\n\n  <div padding>\n    <button ion-button block>Log Out</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpdgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditpdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditpdgPage = /** @class */ (function () {
    function EditpdgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditpdgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditpdgPage');
    };
    EditpdgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editpdg',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/editpdg/editpdg.html"*/'<!--\n  Generated template for the EditpdgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/editpdg/editpdg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditpdgPage);
    return EditpdgPage;
}());

//# sourceMappingURL=editpdg.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HispdgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HispdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HispdgPage = /** @class */ (function () {
    function HispdgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HispdgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HispdgPage');
    };
    HispdgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hispdg',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/hispdg/hispdg.html"*/'<!--\n  Generated template for the HispdgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>hispdg</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/hispdg/hispdg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HispdgPage);
    return HispdgPage;
}());

//# sourceMappingURL=hispdg.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>history</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepdgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomepdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomepdgPage = /** @class */ (function () {
    function HomepdgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomepdgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomepdgPage');
    };
    HomepdgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homepdg',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/homepdg/homepdg.html"*/'<!--\n  Generated template for the HomepdgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align: center">Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar>\n    \n  </ion-searchbar>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/homepdg/homepdg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomepdgPage);
    return HomepdgPage;
}());

//# sourceMappingURL=homepdg.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainhomePage = /** @class */ (function () {
    function MainhomePage(navCtrl, navParams, app, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        menu.enable(true);
    }
    MainhomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainhomePage');
    };
    MainhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mainhome',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/mainhome/mainhome.html"*/'<!--\n  Generated template for the MainhomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-toolbar>\n      <ion-navbar>\n          <ion-title style="text-align: center">Home</ion-title> \n      </ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar>\n\n  </ion-searchbar>\n</ion-content>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-navbar>\n        <ion-title>Menu</ion-title>\n    </ion-navbar>\n    \n  </ion-header>\n  <ion-content>\n      <ion-list>\n          <button ion-item (click)="openPage(DagingPage)">\n            Daging\n          </button>\n          <button ion-item>\n            Ikan\n          </button>\n          <button ion-item>\n            Sayur\n          </button>\n          <button ion-item>\n            Tradisional\n          </button>\n          <button ion-item>\n            Pencuci Mulut\n          </button>\n      </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/mainhome/mainhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MainhomePage);
    return MainhomePage;
}());

//# sourceMappingURL=mainhome.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifpdgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotifpdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotifpdgPage = /** @class */ (function () {
    function NotifpdgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotifpdgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotifpdgPage');
    };
    NotifpdgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifpdg',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/notifpdg/notifpdg.html"*/'<!--\n  Generated template for the NotifpdgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notifpdg</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/notifpdg/notifpdg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotifpdgPage);
    return NotifpdgPage;
}());

//# sourceMappingURL=notifpdg.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topup_topup__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regmer_regmer__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__topup_topup__["a" /* TopupPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__regmer_regmer__["a" /* RegmerPage */];
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n  <ion-tabs tabsPlacement="top">\n    <ion-tab [root]="tab1Root" tabTitle="Detail"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Top Up"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Merchant Register"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topmoney_topmoney__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trans_trans__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopupPage = /** @class */ (function () {
    function TopupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tButton = __WEBPACK_IMPORTED_MODULE_3__trans_trans__["a" /* TransPage */];
        this.tuButton = __WEBPACK_IMPORTED_MODULE_2__topmoney_topmoney__["a" /* TopmoneyPage */];
    }
    TopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopupPage');
    };
    TopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topup',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topup/topup.html"*/'<!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align:center">Top Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Balance</h1>\n\n  <div padding>\n      <button ion-button block [navPush]="tuButton">Top Up</button>\n  </div>\n  \n  <div padding>\n      <button ion-button block [navPush]="tButton">Transaction</button>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topup/topup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TopupPage);
    return TopupPage;
}());

//# sourceMappingURL=topup.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopmoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topconfirm_topconfirm__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TopmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopmoneyPage = /** @class */ (function () {
    function TopmoneyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nButton = __WEBPACK_IMPORTED_MODULE_2__topconfirm_topconfirm__["a" /* TopconfirmPage */];
    }
    TopmoneyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopmoneyPage');
    };
    TopmoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topmoney',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topmoney/topmoney.html"*/'<!--\n  Generated template for the TopmoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align:center">Top Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>Pilih Nominal</h1>\n  <ion-list radio-group>\n      <ion-item>\n        <ion-label>Rp 10.000</ion-label>\n        <ion-radio value="sepuluh" checked></ion-radio>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Rp 20.000</ion-label>\n        <ion-radio value="duapuluh"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Rp 50.000</ion-label>\n        <ion-radio value="limapuluh"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Rp 100.000</ion-label>\n          <ion-radio value="seratus"></ion-radio>\n        </ion-item>\n  </ion-list>\n\n  <div padding>\n      <button ion-button block [navPush]="nButton">Next</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topmoney/topmoney.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TopmoneyPage);
    return TopmoneyPage;
}());

//# sourceMappingURL=topmoney.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopconfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topupload_topupload__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TopconfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopconfirmPage = /** @class */ (function () {
    function TopconfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.uploadButton = __WEBPACK_IMPORTED_MODULE_2__topupload_topupload__["a" /* TopuploadPage */];
    }
    TopconfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopconfirmPage');
    };
    TopconfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topconfirm',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topconfirm/topconfirm.html"*/'<!--\n  Generated template for the TopconfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title style="text-align:center">Top Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>\n      Anda akan top up saldo virtual sesuai nominal yang anda pilih.\n      Silahkan transfer ke\n  </p>\n\n  <p>\n    Atas Nama : Mamafood \n  </p>\n    \n  <p>\n      No.Rekening : 15600098615789\n  </p>\n\n  <p>\n      Upload bukti transfer pada halaman selanjutnya.\n  </p>\n  \n\n  <div padding>\n      <button ion-button block [navPush]="uploadButton">Next</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topconfirm/topconfirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TopconfirmPage);
    return TopconfirmPage;
}());

//# sourceMappingURL=topconfirm.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopuploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TopuploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopuploadPage = /** @class */ (function () {
    function TopuploadPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
    }
    TopuploadPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Upload Success!!',
            message: 'Your top up will be procceed in 24 hours',
            buttons: ['OK']
        });
        alert.present();
    };
    TopuploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopuploadPage');
    };
    TopuploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topupload',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topupload/topupload.html"*/'<!--\n  Generated template for the TopuploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title style="text-align:center">Top Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>Upload Bukti Transfer</h1>\n\n<div padding>\n    <button ion-button block>Browse</button>\n</div>\n\n<div padding>\n    <button ion-button block (click)="doAlert()">Upload</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/topupload/topupload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TopuploadPage);
    return TopuploadPage;
}());

//# sourceMappingURL=topupload.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TransPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransPage = /** @class */ (function () {
    function TransPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransPage');
    };
    TransPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trans',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/trans/trans.html"*/'<!--\n  Generated template for the TransPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>trans</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/trans/trans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TransPage);
    return TransPage;
}());

//# sourceMappingURL=trans.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegmerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegmerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegmerPage = /** @class */ (function () {
    function RegmerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegmerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegmerPage');
    };
    RegmerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regmer',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/regmer/regmer.html"*/'<!--\n  Generated template for the RegmerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align: center">Register Merchant</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Personal Detail</h1>\n  <ion-item>\n    <ion-label stacked>Address</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-label stacked>Upload KTP</ion-label>\n  <button ion-button>Upload</button>\n\n  <h1>Menu</h1>\n  <ion-item>\n    <ion-label stacked>Menu Name</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n  \n  <ion-label stacked>Menu Photo</ion-label>\n  <button ion-button>Upload</button>\n\n  <ion-item>\n    <ion-label stacked>Description</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Price</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <div padding>\n    <button ion-button block>Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/regmer/regmer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegmerPage);
    return RegmerPage;
}());

//# sourceMappingURL=regmer.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfpdgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editpdg_editpdg__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toppdg_toppdg__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buypromo_buypromo__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfpdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfpdgPage = /** @class */ (function () {
    function ProfpdgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__editpdg_editpdg__["a" /* EditpdgPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__toppdg_toppdg__["a" /* ToppdgPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__buypromo_buypromo__["a" /* BuypromoPage */];
    }
    ProfpdgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfpdgPage');
    };
    ProfpdgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profpdg',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/profpdg/profpdg.html"*/'<!--\n  Generated template for the ProfpdgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align:center">Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-tabs tabsPlacement="top">\n        <ion-tab [root]="tab1Root" tabTitle="Detail"></ion-tab>\n        <ion-tab [root]="tab2Root" tabTitle="Top Up"></ion-tab>\n        <ion-tab [root]="tab3Root" tabTitle="Buy Promo"></ion-tab>\n      </ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/profpdg/profpdg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfpdgPage);
    return ProfpdgPage;
}());

//# sourceMappingURL=profpdg.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToppdgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdraw_withdraw__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ToppdgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToppdgPage = /** @class */ (function () {
    function ToppdgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wdButton = __WEBPACK_IMPORTED_MODULE_2__withdraw_withdraw__["a" /* WithdrawPage */];
    }
    ToppdgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToppdgPage');
    };
    ToppdgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toppdg',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/toppdg/toppdg.html"*/'<!--\n  Generated template for the ToppdgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n    <h1>Balance</h1>\n\n    <div padding>\n        <button ion-button block [navPush]="tuButton">Top Up</button>\n    </div>\n    \n    <div padding>\n        <button ion-button block [navPush]="wdButton">Withdraw</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/toppdg/toppdg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ToppdgPage);
    return ToppdgPage;
}());

//# sourceMappingURL=toppdg.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bankacc_bankacc__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transButton = __WEBPACK_IMPORTED_MODULE_2__bankacc_bankacc__["a" /* BankaccPage */];
    }
    WithdrawPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawPage');
    };
    WithdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-withdraw',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/withdraw/withdraw.html"*/'<!--\n  Generated template for the WithdrawPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>aaaa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<h1>Balance</h1>\n<ion-list>\n  <button ion-button block [navPush]="transButton">Transfer to Bank Account</button>\n  <button ion-button block>Transaction</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/withdraw/withdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WithdrawPage);
    return WithdrawPage;
}());

//# sourceMappingURL=withdraw.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabtab_tabtab__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SubmitButton = __WEBPACK_IMPORTED_MODULE_2__tabtab_tabtab__["a" /* TabtabPage */];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mamafood</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Full Name</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Phone Number</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <a href="" target="_blank">Terms and Condition</a>\n\n    <ion-item>\n      <ion-label>I accept the terms and condition</ion-label>\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block [navPush]="SubmitButton">Sign Up</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabpedagangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepdg_homepdg__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifpdg_notifpdg__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hispdg_hispdg__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profpdg_profpdg__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabpedagangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabpedagangPage = /** @class */ (function () {
    function TabpedagangPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__homepdg_homepdg__["a" /* HomepdgPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__notifpdg_notifpdg__["a" /* NotifpdgPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__hispdg_hispdg__["a" /* HispdgPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__profpdg_profpdg__["a" /* ProfpdgPage */];
    }
    TabpedagangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabpedagangPage');
    };
    TabpedagangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabpedagang',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/tabpedagang/tabpedagang.html"*/'<!--\n  Generated template for the TabpedagangPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n    <ion-tabs>\n      <ion-tab [root]="tab1" tabTitle="Home" tabIcon="home"></ion-tab>\n      <ion-tab [root]="tab2" tabIcon="notifications" tabTitle="Notification"></ion-tab>\n      <ion-tab [root]="tab3" tabIcon="timer" tabTitle="History"></ion-tab>\n      <ion-tab [root]="tab4" tabIcon="contact" tabTitle="Profile"></ion-tab>\n    </ion-tabs>\n  </ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/tabpedagang/tabpedagang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabpedagangPage);
    return TabpedagangPage;
}());

//# sourceMappingURL=tabpedagang.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bankacc/bankacc.module": [
		295,
		26
	],
	"../pages/buypromo/buypromo.module": [
		296,
		25
	],
	"../pages/changepass/changepass.module": [
		297,
		24
	],
	"../pages/daging/daging.module": [
		298,
		23
	],
	"../pages/detail/detail.module": [
		299,
		22
	],
	"../pages/editpdg/editpdg.module": [
		300,
		21
	],
	"../pages/hispdg/hispdg.module": [
		301,
		20
	],
	"../pages/history/history.module": [
		302,
		19
	],
	"../pages/homepdg/homepdg.module": [
		303,
		18
	],
	"../pages/konfirmasi/konfirmasi.module": [
		304,
		17
	],
	"../pages/mainhome/mainhome.module": [
		305,
		16
	],
	"../pages/notification/notification.module": [
		306,
		15
	],
	"../pages/notifpdg/notifpdg.module": [
		307,
		14
	],
	"../pages/profile/profile.module": [
		308,
		13
	],
	"../pages/profpdg/profpdg.module": [
		309,
		12
	],
	"../pages/regmer/regmer.module": [
		311,
		11
	],
	"../pages/signup/signup.module": [
		310,
		10
	],
	"../pages/tabpedagang/tabpedagang.module": [
		313,
		9
	],
	"../pages/tabtab/tabtab.module": [
		312,
		8
	],
	"../pages/topconfirm/topconfirm.module": [
		315,
		7
	],
	"../pages/topmoney/topmoney.module": [
		316,
		6
	],
	"../pages/toppdg/toppdg.module": [
		314,
		5
	],
	"../pages/topup/topup.module": [
		317,
		4
	],
	"../pages/topupload/topupload.module": [
		318,
		3
	],
	"../pages/trans/trans.module": [
		319,
		2
	],
	"../pages/transfer/transfer.module": [
		320,
		1
	],
	"../pages/withdraw/withdraw.module": [
		321,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabtab_tabtab__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabpedagang_tabpedagang__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SignUpButton = __WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */];
        this.LogInButton = __WEBPACK_IMPORTED_MODULE_3__tabtab_tabtab__["a" /* TabtabPage */];
        this.LogInPdgButton = __WEBPACK_IMPORTED_MODULE_4__tabpedagang_tabpedagang__["a" /* TabpedagangPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mamafood\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <h1>Log In</h1>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block [navPush]="LogInButton">Log In</button>\n      <button ion-button block [navPush]="SignUpButton">Sign Up</button>\n      <button ion-button block [navPush]="LogInPdgButton">Log In Pedagang</button>\n    </div>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DagingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DagingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DagingPage = /** @class */ (function () {
    function DagingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DagingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DagingPage');
    };
    DagingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daging',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/daging/daging.html"*/'<!--\n  Generated template for the DagingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>daging</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/daging/daging.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DagingPage);
    return DagingPage;
}());

//# sourceMappingURL=daging.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabtab_tabtab__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mainhome_mainhome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_history_history__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_topup_topup__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_regmer_regmer__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_changepass_changepass__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_withdraw_withdraw__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_topmoney_topmoney__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_topconfirm_topconfirm__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_topupload_topupload__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_trans_trans__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_daging_daging__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabpedagang_tabpedagang__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_homepdg_homepdg__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_notifpdg_notifpdg__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_hispdg_hispdg__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profpdg_profpdg__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_editpdg_editpdg__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_toppdg_toppdg__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_buypromo_buypromo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_bankacc_bankacc__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_transfer_transfer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_konfirmasi_konfirmasi__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabtab_tabtab__["a" /* TabtabPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mainhome_mainhome__["a" /* MainhomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_regmer_regmer__["a" /* RegmerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_withdraw_withdraw__["a" /* WithdrawPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_topmoney_topmoney__["a" /* TopmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_topconfirm_topconfirm__["a" /* TopconfirmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_topupload_topupload__["a" /* TopuploadPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_trans_trans__["a" /* TransPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_daging_daging__["a" /* DagingPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabpedagang_tabpedagang__["a" /* TabpedagangPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_homepdg_homepdg__["a" /* HomepdgPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notifpdg_notifpdg__["a" /* NotifpdgPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_hispdg_hispdg__["a" /* HispdgPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profpdg_profpdg__["a" /* ProfpdgPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editpdg_editpdg__["a" /* EditpdgPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_toppdg_toppdg__["a" /* ToppdgPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_buypromo_buypromo__["a" /* BuypromoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_bankacc_bankacc__["a" /* BankaccPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_konfirmasi_konfirmasi__["a" /* KonfirmasiPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    iconMode: 'ios',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/bankacc/bankacc.module#BankaccPageModule', name: 'BankaccPage', segment: 'bankacc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buypromo/buypromo.module#BuypromoPageModule', name: 'BuypromoPage', segment: 'buypromo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepass/changepass.module#ChangepassPageModule', name: 'ChangepassPage', segment: 'changepass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daging/daging.module#DagingPageModule', name: 'DagingPage', segment: 'daging', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editpdg/editpdg.module#EditpdgPageModule', name: 'EditpdgPage', segment: 'editpdg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hispdg/hispdg.module#HispdgPageModule', name: 'HispdgPage', segment: 'hispdg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homepdg/homepdg.module#HomepdgPageModule', name: 'HomepdgPage', segment: 'homepdg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/konfirmasi/konfirmasi.module#KonfirmasiPageModule', name: 'KonfirmasiPage', segment: 'konfirmasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mainhome/mainhome.module#MainhomePageModule', name: 'MainhomePage', segment: 'mainhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifpdg/notifpdg.module#NotifpdgPageModule', name: 'NotifpdgPage', segment: 'notifpdg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profpdg/profpdg.module#ProfpdgPageModule', name: 'ProfpdgPage', segment: 'profpdg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regmer/regmer.module#RegmerPageModule', name: 'RegmerPage', segment: 'regmer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabtab/tabtab.module#TabtabPageModule', name: 'TabtabPage', segment: 'tabs', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/tabpedagang/tabpedagang.module#TabpedagangPageModule', name: 'TabpedagangPage', segment: 'tabpedagang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toppdg/toppdg.module#ToppdgPageModule', name: 'ToppdgPage', segment: 'toppdg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topconfirm/topconfirm.module#TopconfirmPageModule', name: 'TopconfirmPage', segment: 'topconfirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topmoney/topmoney.module#TopmoneyPageModule', name: 'TopmoneyPage', segment: 'topmoney', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topup/topup.module#TopupPageModule', name: 'TopupPage', segment: 'topup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topupload/topupload.module#TopuploadPageModule', name: 'TopuploadPage', segment: 'topupload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trans/trans.module#TransPageModule', name: 'TransPage', segment: 'trans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/withdraw/withdraw.module#WithdrawPageModule', name: 'WithdrawPage', segment: 'withdraw', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabtab_tabtab__["a" /* TabtabPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mainhome_mainhome__["a" /* MainhomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_regmer_regmer__["a" /* RegmerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_changepass_changepass__["a" /* ChangepassPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_withdraw_withdraw__["a" /* WithdrawPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_topmoney_topmoney__["a" /* TopmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_topconfirm_topconfirm__["a" /* TopconfirmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_topupload_topupload__["a" /* TopuploadPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_trans_trans__["a" /* TransPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_daging_daging__["a" /* DagingPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabpedagang_tabpedagang__["a" /* TabpedagangPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_homepdg_homepdg__["a" /* HomepdgPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notifpdg_notifpdg__["a" /* NotifpdgPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_hispdg_hispdg__["a" /* HispdgPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profpdg_profpdg__["a" /* ProfpdgPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editpdg_editpdg__["a" /* EditpdgPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_toppdg_toppdg__["a" /* ToppdgPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_buypromo_buypromo__["a" /* BuypromoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_bankacc_bankacc__["a" /* BankaccPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_konfirmasi_konfirmasi__["a" /* KonfirmasiPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabtabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainhome_mainhome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabtabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabtabPage = /** @class */ (function () {
    function TabtabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__mainhome_mainhome__["a" /* MainhomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__history_history__["a" /* HistoryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    TabtabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabtabPage');
    };
    TabtabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabtab',template:/*ion-inline-start:"/Users/nadhilarasati/Mamafood-mobile/src/pages/tabtab/tabtab.html"*/'<!--\n  Generated template for the TabtabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabIcon="notifications" tabTitle="Notification"></ion-tab>\n    <ion-tab [root]="tab3Root" tabIcon="timer" tabTitle="History"></ion-tab>\n    <ion-tab [root]="tab4Root" tabIcon="contact" tabTitle="Profile"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/nadhilarasati/Mamafood-mobile/src/pages/tabtab/tabtab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabtabPage);
    return TabtabPage;
}());

//# sourceMappingURL=tabtab.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map