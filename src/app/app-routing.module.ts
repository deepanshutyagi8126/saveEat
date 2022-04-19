import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { CreditsComponent } from './credits/credits.component';
import { GenerateCreditComponent } from './generate-credit/generate-credit.component';
import { CreaditGivenComponent } from './creadit-given/creadit-given.component';
import { StaticContentComponent } from './static-content/static-content.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqComponent } from './faq/faq.component';
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
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashborad', component: DashboradComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers-details', component: CustomersDetailsComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'generate-credit', component: GenerateCreditComponent },
  { path: 'creadit-given', component: CreaditGivenComponent },
  { path: 'static-content', component: StaticContentComponent },
  { path: 'term-condition', component: TermConditionComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants-menus', component: RestaurantsMenusComponent },
  { path: 'restaurants-sell-items', component: RestaurantsSellItemsComponent },
  { path: 'restaurants-personal-information', component: RestaurantsPersonalInformationComponent },
  { path: 'restaurants-order-history', component: RestaurantsOrderHistoryComponent },
  { path: 'restaurants-employees', component: RestaurantsEmployeesComponent },
  { path: 'restaurants-payout', component: RestaurantsPayoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'all-transactions', component: AllTransactionsComponent },
  { path: 'restaurant-transaction', component: RestaurantTransactionComponent },
  { path: 'refund-transation', component: RefundTransationComponent },
  { path: 'credit-transation', component: CreditTransationComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'reward-history', component: RewardHistoryComponent },
  { path: 'add-reward', component: AddRewardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cuisines', component: CuisinesComponent },
  { path: 'brand-details', component: BrandDetailsComponent },
  { path: 'store-personal-info', component: StorePersonalInfoComponent },
  { path: 'store-menu', component: StoreMenuComponent },
  { path: 'store-sell-items', component: StoreSellItemsComponent },
  { path: 'store-order-history', component: StoreOrderHistoryComponent },
  { path: 'store-employee', component: StoreEmployeeComponent },
  { path: 'store-payout', component: StorePayoutComponent },
  { path: 'add-users', component: AddUsersComponent },
  { path: 'complain-details', component: ComplainDetailsComponent },
  { path: 'role-managemnt', component: RoleManagemntComponent },
  { path: 'add-role', component: AddRoleComponent },
  { path: 'refund-already', component: RefundAlreadyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true,
    anchorScrolling: 'enabled',
    })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
