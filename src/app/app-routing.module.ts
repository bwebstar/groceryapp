import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddShoppingItemComponent } from './component/add-shopping-item/add-shopping-item.component';
import { EditShoppingItemComponent } from './component/edit-shopping-item/edit-shopping-item.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'addshoppingitem', component: AddShoppingItemComponent },
  {path: 'editshppingitem', component: EditShoppingItemComponent },


  // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
