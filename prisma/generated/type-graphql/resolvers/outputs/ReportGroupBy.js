"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportCountAggregate_1 = require("../outputs/ReportCountAggregate");
const ReportMaxAggregate_1 = require("../outputs/ReportMaxAggregate");
const ReportMinAggregate_1 = require("../outputs/ReportMinAggregate");
let ReportGroupBy = class ReportGroupBy {
};
exports.ReportGroupBy = ReportGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportGroupBy.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportGroupBy.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReportGroupBy.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportCountAggregate_1.ReportCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportCountAggregate_1.ReportCountAggregate)
], ReportGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportMinAggregate_1.ReportMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportMinAggregate_1.ReportMinAggregate)
], ReportGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportMaxAggregate_1.ReportMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportMaxAggregate_1.ReportMaxAggregate)
], ReportGroupBy.prototype, "_max", void 0);
exports.ReportGroupBy = ReportGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReportGroupBy", {})
], ReportGroupBy);
