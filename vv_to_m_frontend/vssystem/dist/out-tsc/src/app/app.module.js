import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVegitableComponent } from './components/add-vegitable/add-vegitable.component';
// import { ListVegitableComponent } from './components/list-vegitable/list-vegitable.component';
// import { AddFarmerComponent } from './components/add-farmer/add-farmer.component';
// import { ListFarmerComponent } from './components/list-farmer/list-farmer.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            AddVegitableComponent
            // ListVegitableComponent,
            // AddFarmerComponent,
            // ListFarmerComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map