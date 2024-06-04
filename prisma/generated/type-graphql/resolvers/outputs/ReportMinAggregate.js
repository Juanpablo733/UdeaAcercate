"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReportMinAggregate = class ReportMinAggregate {
};
exports.ReportMinAggregate = ReportMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMinAggregate.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMinAggregate.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReportMinAggregate.prototype, "dateTime", void 0);
exports.ReportMinAggregate = ReportMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReportMinAggregate", {})
], ReportMinAggregate);
