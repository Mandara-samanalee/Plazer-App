"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpController = void 0;
const common_1 = require("@nestjs/common");
const otp_service_1 = require("./otp.service");
const otp_entity_1 = require("./otp.entity");
let OtpController = class OtpController {
    constructor(otpService) {
        this.otpService = otpService;
    }
    sendMailOtp(recipient, response) {
        return this.otpService.sendMailOtp(recipient, response);
    }
    resendMailOtp(otpId, response) {
        return this.otpService.resendMaitOtp(otpId, response);
    }
    verifyOtp(otp, response) {
        return this.otpService.verifyOtp(otp, response);
    }
};
exports.OtpController = OtpController;
__decorate([
    (0, common_1.Get)('sendMailOtp'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_entity_1.Otp, Object]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "sendMailOtp", null);
__decorate([
    (0, common_1.Put)('resendMailOtp'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_entity_1.Otp, Object]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "resendMailOtp", null);
__decorate([
    (0, common_1.Post)('verifyOtp'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [otp_entity_1.Otp, Object]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "verifyOtp", null);
exports.OtpController = OtpController = __decorate([
    (0, common_1.Controller)('otp'),
    __metadata("design:paramtypes", [otp_service_1.OtpService])
], OtpController);
//# sourceMappingURL=otp.controllers.js.map