"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReportMaxOrderByAggregateInput = class ReportMaxOrderByAggregateInput {
};
exports.ReportMaxOrderByAggregateInput = ReportMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMaxOrderByAggregateInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMaxOrderByAggregateInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMaxOrderByAggregateInput.prototype, "dateTime", void 0);
exports.ReportMaxOrderByAggregateInput = ReportMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportMaxOrderByAggregateInput", {})
], ReportMaxOrderByAggregateInput);
