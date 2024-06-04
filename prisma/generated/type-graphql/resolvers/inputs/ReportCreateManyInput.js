"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReportCreateManyInput = class ReportCreateManyInput {
};
exports.ReportCreateManyInput = ReportCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportCreateManyInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportCreateManyInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReportCreateManyInput.prototype, "dateTime", void 0);
exports.ReportCreateManyInput = ReportCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportCreateManyInput", {})
], ReportCreateManyInput);
