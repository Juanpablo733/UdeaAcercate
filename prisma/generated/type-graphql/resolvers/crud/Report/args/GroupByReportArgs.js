"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportOrderByWithAggregationInput_1 = require("../../../inputs/ReportOrderByWithAggregationInput");
const ReportScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReportScalarWhereWithAggregatesInput");
const ReportWhereInput_1 = require("../../../inputs/ReportWhereInput");
const ReportScalarFieldEnum_1 = require("../../../../enums/ReportScalarFieldEnum");
let GroupByReportArgs = class GroupByReportArgs {
};
exports.GroupByReportArgs = GroupByReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereInput_1.ReportWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportWhereInput_1.ReportWhereInput)
], GroupByReportArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportOrderByWithAggregationInput_1.ReportOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReportArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportScalarFieldEnum_1.ReportScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReportArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportScalarWhereWithAggregatesInput_1.ReportScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportScalarWhereWithAggregatesInput_1.ReportScalarWhereWithAggregatesInput)
], GroupByReportArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReportArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReportArgs.prototype, "skip", void 0);
exports.GroupByReportArgs = GroupByReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReportArgs);
