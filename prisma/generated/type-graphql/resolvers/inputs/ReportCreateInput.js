"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReportCreateInput = class ReportCreateInput {
};
exports.ReportCreateInput = ReportCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportCreateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportCreateInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportCreateInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReportCreateInput.prototype, "dateTime", void 0);
exports.ReportCreateInput = ReportCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportCreateInput", {})
], ReportCreateInput);
