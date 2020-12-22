import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let vegitableUrl;
if (environment.backendUrl !== '') {
    vegitableUrl = environment.backendUrl + "/vegitables";
}
let VegitableService = class VegitableService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(vegitableUrl);
    }
    get(id) {
        return this.http.get(`${vegitableUrl}/${id}`);
    }
    create(data) {
        return this.http.post(vegitableUrl, data);
    }
    update(id, data) {
        return this.http.put(`${vegitableUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${vegitableUrl}/${id}`);
    }
    deleteAll() {
        return this.http.delete(vegitableUrl);
    }
    findByTitle(title) {
        return this.http.get(`${vegitableUrl}?title=${title}`);
    }
};
VegitableService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], VegitableService);
export { VegitableService };
//# sourceMappingURL=vegitable.service.js.map