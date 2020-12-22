import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AddVegitableComponent = class AddVegitableComponent {
    constructor(vegitableService) {
        this.vegitableService = vegitableService;
        this.vegitables = [{
                veg_name: '',
                veg_quantity: null
            }];
        this.farmer_vegitables = {
            village_name: '',
            farmer_name: '',
            phone_no: null,
            vegitables: this.vegitables
        };
        this.submitted = false;
    }
    ngOnInit() {
    }
    saveVegitable() {
        const data = {
            village_name: this.farmer_vegitables.village_name,
            farmer_name: this.farmer_vegitables.farmer_name,
            phone_no: this.farmer_vegitables.phone_no,
            vegitables: this.farmer_vegitables.vegitables
        };
        this.vegitableService.create(data)
            .subscribe(response => {
            console.log(response);
            this.submitted = true;
        }, error => {
            console.log(error);
        });
    }
};
AddVegitableComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-vegitable',
        templateUrl: './add-vegitable.component.html',
        styleUrls: ['./add-vegitable.component.css']
    })
], AddVegitableComponent);
export { AddVegitableComponent };
//# sourceMappingURL=add-vegitable.component.js.map