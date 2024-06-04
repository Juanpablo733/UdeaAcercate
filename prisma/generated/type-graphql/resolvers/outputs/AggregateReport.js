"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReport = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportCountAggregate_1 = require("../outputs/ReportCountAggregate");
const ReportMaxAggregate_1 = require("../outputs/ReportMaxAggregate");
const ReportMinAggregate_1 = require("../outputs/ReportMinAggregate");
let AggregateReport = class AggregateReport {
};
exports.AggregateReport = AggregateReport;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportCountAggregate_1.ReportCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportCountAggregate_1.ReportCountAggregate)
], AggregateReport.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportMinAggregate_1.ReportMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportMinAggregate_1.ReportMinAggregate)
], AggregateReport.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportMaxAggregate_1.ReportMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportMaxAggregate_1.ReportMaxAggregate)
], AggregateReport.prototype, "_max", void 0);
exports.AggregateReport = AggregateReport = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReport", {})
], AggregateReport);
