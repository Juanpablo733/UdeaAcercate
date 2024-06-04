"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReportMinOrderByAggregateInput = class ReportMinOrderByAggregateInput {
};
exports.ReportMinOrderByAggregateInput = ReportMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMinOrderByAggregateInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMinOrderByAggregateInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportMinOrderByAggregateInput.prototype, "dateTime", void 0);
exports.ReportMinOrderByAggregateInput = ReportMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportMinOrderByAggregateInput", {})
], ReportMinOrderByAggregateInput);
