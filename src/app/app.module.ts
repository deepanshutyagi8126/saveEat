import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CreditsComponent } from './credits/credits.component';
import { GenerateCreditComponent } from './generate-credit/generate-credit.component';
import { CreaditGivenComponent } from './creadit-given/creadit-given.component';
import { StaticContentComponent } from './static-content/static-content.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqComponent } from './faq/faq.component';
import { AdminbarComponent } from './adminbar/adminbar.component';
import { SettingComponent } from './setting/setting.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsPersonalInformationComponent } from './restaurants-personal-information/restaurants-personal-information.component';
import { RestaurantsMenusComponent } from './restaurants-menus/restaurants-menus.component';
import { RestaurantsSellItemsComponent } from './restaurants-sell-items/restaurants-sell-items.component';
import { RestaurantsOrderHistoryComponent } from './restaurants-order-history/restaurants-order-history.component';
import { RestaurantsEmployeesComponent } from './restaurants-employees/restaurants-employees.component';
import { RestaurantsPayoutComponent } from './restaurants-payout/restaurants-payout.component';
import { OrdersComponent } from './orders/orders.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { RestaurantTransactionComponent } from './restaurant-transaction/restaurant-transaction.component';
import { RefundTransationComponent } from './refund-transation/refund-transation.component';
import { CreditTransationComponent } from './credit-transation/credit-transation.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardHistoryComponent } from './reward-history/reward-history.component';
import { AddRewardComponent } from './add-reward/add-reward.component';
import { UsersComponent } from './users/users.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { StorePersonalInfoComponent } from './store-personal-info/store-personal-info.component';
import { StoreMenuComponent } from './store-menu/store-menu.component';
import { StoreSellItemsComponent } from './store-sell-items/store-sell-items.component';
import { StoreOrderHistoryComponent } from './store-order-history/store-order-history.component';
import { StoreEmployeeComponent } from './store-employee/store-employee.component';
import { StorePayoutComponent } from './store-payout/store-payout.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ComplainDetailsComponent } from './complain-details/complain-details.component';
import { RoleManagemntComponent } from './role-managemnt/role-managemnt.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RefundAlreadyComponent } from './refund-already/refund-already.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    ResetPasswordComponent,
    SidebarComponent,
    DashboradComponent,
    HeaderComponent,
    CustomersComponent,
    CustomersDetailsComponent,
    CreditsComponent,
    GenerateCreditComponent,
    CreaditGivenComponent,
    StaticContentComponent,
    TermConditionComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    FaqComponent,
    AdminbarComponent,
    SettingComponent,
    OrderDetailsComponent,
    RestaurantsComponent,
    RestaurantsPersonalInformationComponent,
    RestaurantsMenusComponent,
    RestaurantsSellItemsComponent,
    RestaurantsOrderHistoryComponent,
    RestaurantsEmployeesComponent,
    RestaurantsPayoutComponent,
    OrdersComponent,
    AllTransactionsComponent,
    RestaurantTransactionComponent,
    RefundTransationComponent,
    CreditTransationComponent,
    RewardsComponent,
    RewardHistoryComponent,
    AddRewardComponent,
    UsersComponent,
    CuisinesComponent,
    OtpComponent,
    BrandDetailsComponent,
    StoreDetailComponent,
    StorePersonalInfoComponent,
    StoreMenuComponent,
    StoreSellItemsComponent,
    StoreOrderHistoryComponent,
    StoreEmployeeComponent,
    StorePayoutComponent,
    AddUsersComponent,
    ComplainDetailsComponent,
    RoleManagemntComponent,
    AddRoleComponent,
    RefundAlreadyComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
