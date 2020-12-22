import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let farmerUrl;
if (environment.backendUrl !== '') {
    farmerUrl = environment.backendUrl + "/farmers";
}
let FarmerService = class FarmerService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(farmerUrl);
    }
    get(id) {
        return this.http.get(`${farmerUrl}/${id}`);
    }
    create(data) {
        return this.http.post(farmerUrl, data);
    }
    update(id, data) {
        return this.http.put(`${farmerUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${farmerUrl}/${id}`);
    }
    deleteAll() {
        return this.http.delete(farmerUrl);
    }
    findByTitle(title) {
        return this.http.get(`${farmerUrl}?title=${title}`);
    }
};
FarmerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], FarmerService);
export { FarmerService };
//# sourceMappingURL=farmer.service.js.map