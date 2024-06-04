"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ReportUserIdEventIdCompoundUniqueInput_1 = require("../inputs/ReportUserIdEventIdCompoundUniqueInput");
const ReportWhereInput_1 = require("../inputs/ReportWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let ReportWhereUniqueInput = class ReportWhereUniqueInput {
};
exports.ReportWhereUniqueInput = ReportWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportUserIdEventIdCompoundUniqueInput_1.ReportUserIdEventIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportUserIdEventIdCompoundUniqueInput_1.ReportUserIdEventIdCompoundUniqueInput)
], ReportWhereUniqueInput.prototype, "userId_eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportWhereInput_1.ReportWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReportWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportWhereInput_1.ReportWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReportWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportWhereInput_1.ReportWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReportWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReportWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReportWhereUniqueInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReportWhereUniqueInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReportWhereUniqueInput.prototype, "dateTime", void 0);
exports.ReportWhereUniqueInput = ReportWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportWhereUniqueInput", {})
], ReportWhereUniqueInput);
