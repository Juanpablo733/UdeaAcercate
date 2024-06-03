"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReportMaxAggregate = class ReportMaxAggregate {
};
exports.ReportMaxAggregate = ReportMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMaxAggregate.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMaxAggregate.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReportMaxAggregate.prototype, "dateTime", void 0);
exports.ReportMaxAggregate = ReportMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReportMaxAggregate", {})
], ReportMaxAggregate);
