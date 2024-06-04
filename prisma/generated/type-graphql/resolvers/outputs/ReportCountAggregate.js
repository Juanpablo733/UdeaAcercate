"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReportCountAggregate = class ReportCountAggregate {
};
exports.ReportCountAggregate = ReportCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReportCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReportCountAggregate.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReportCountAggregate.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReportCountAggregate.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReportCountAggregate.prototype, "_all", void 0);
exports.ReportCountAggregate = ReportCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReportCountAggregate", {})
], ReportCountAggregate);
