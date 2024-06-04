"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReportCountOrderByAggregateInput = class ReportCountOrderByAggregateInput {
};
exports.ReportCountOrderByAggregateInput = ReportCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportCountOrderByAggregateInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportCountOrderByAggregateInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportCountOrderByAggregateInput.prototype, "dateTime", void 0);
exports.ReportCountOrderByAggregateInput = ReportCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportCountOrderByAggregateInput", {})
], ReportCountOrderByAggregateInput);
