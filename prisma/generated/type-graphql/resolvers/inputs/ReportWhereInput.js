"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ReportWhereInput = class ReportWhereInput {
};
exports.ReportWhereInput = ReportWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReportWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReportWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReportWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReportWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReportWhereInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReportWhereInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReportWhereInput.prototype, "dateTime", void 0);
exports.ReportWhereInput = ReportWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportWhereInput", {})
], ReportWhereInput);
