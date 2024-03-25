"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const org_entity_1 = require("./org.entity");
const org_service_1 = require("./org.service");
const org_controller_1 = require("./org.controller");
let OrgModule = class OrgModule {
};
exports.OrgModule = OrgModule;
exports.OrgModule = OrgModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([org_entity_1.org])],
        providers: [org_service_1.OrgService],
        controllers: [org_controller_1.OrgController],
        exports: [typeorm_1.TypeOrmModule]
    })
], OrgModule);
//# sourceMappingURL=org.module.js.map