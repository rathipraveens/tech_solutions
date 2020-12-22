import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddVegitableComponent } from './components/add-vegitable/add-vegitable.component';
// import { ListVegitableComponent } from './components/list-vegitable/list-vegitable.component';
// import { AddFarmerComponent } from './components/add-farmer/add-farmer.component';
// import { ListFarmerComponent } from './components/list-farmer/list-farmer.component';
const routes = [
    { path: '', redirectTo: 'vegitables', pathMatch: 'full' },
    { path: 'vegitables', component: AddVegitableComponent }
    // { path: 'vegitables/list', component: ListVegitableComponent },
    // { path: 'farmers', component: AddFarmerComponent },
    // { path: 'farmers/list', component: ListFarmerComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map