import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { TabtabPage } from '../pages/tabtab/tabtab';
import { MainhomePage } from '../pages/mainhome/mainhome';
import { NotificationPage } from '../pages/notification/notification';
import { HistoryPage } from '../pages/history/history';
import { ProfilePage } from '../pages/profile/profile';
import { DetailPage } from '../pages/detail/detail';
import { TopupPage } from '../pages/topup/topup';
import { RegmerPage } from '../pages/regmer/regmer';
import { ChangepassPage } from '../pages/changepass/changepass';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { TopmoneyPage } from '../pages/topmoney/topmoney';
import { TopconfirmPage } from '../pages/topconfirm/topconfirm';
import { TopuploadPage } from '../pages/topupload/topupload';
import { TransPage } from '../pages/trans/trans';
import { DagingPage } from '../pages/daging/daging';
import { TabpedagangPage } from '../pages/tabpedagang/tabpedagang';
import { HomepdgPage } from '../pages/homepdg/homepdg';
import { NotifpdgPage } from '../pages/notifpdg/notifpdg';
import { HispdgPage } from '../pages/hispdg/hispdg';
import { ProfpdgPage } from '../pages/profpdg/profpdg';
import { EditpdgPage } from '../pages/editpdg/editpdg';
import { ToppdgPage } from '../pages/toppdg/toppdg';
import { BuypromoPage } from '../pages/buypromo/buypromo';
import { BankaccPage } from '../pages/bankacc/bankacc';
import { TransferPage } from '../pages/transfer/transfer';
import { KonfirmasiPage } from '../pages/konfirmasi/konfirmasi';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    TabtabPage,
    MainhomePage,
    NotificationPage,
    HistoryPage,
    ProfilePage,
    DetailPage,
    TopupPage,
    RegmerPage,
    ChangepassPage,
    WithdrawPage,
    TopmoneyPage,
    TopconfirmPage,
    TopuploadPage,
    TransPage,
    DagingPage,
    TabpedagangPage,
    HomepdgPage,
    NotifpdgPage,
    HispdgPage,
    ProfpdgPage,
    EditpdgPage,
    ToppdgPage,
    BuypromoPage,
    BankaccPage,
    TransferPage,
    KonfirmasiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
     iconMode: 'ios', 
     tabsPlacement: 'bottom',
     pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    TabtabPage,
    MainhomePage,
    NotificationPage,
    HistoryPage,
    ProfilePage,
    DetailPage,
    TopupPage,
    RegmerPage,
    ChangepassPage,
    WithdrawPage,
    TopmoneyPage,
    TopconfirmPage,
    TopuploadPage,
    TransPage,
    DagingPage,
    TabpedagangPage,
    HomepdgPage,
    NotifpdgPage,
    HispdgPage,
    ProfpdgPage,
    EditpdgPage,
    ToppdgPage,
    BuypromoPage,
    BankaccPage,
    TransferPage,
    KonfirmasiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
