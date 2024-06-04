"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportCountOrderByAggregateInput_1 = require("../inputs/ReportCountOrderByAggregateInput");
const ReportMaxOrderByAggregateInput_1 = require("../inputs/ReportMaxOrderByAggregateInput");
const ReportMinOrderByAggregateInput_1 = require("../inputs/ReportMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReportOrderByWithAggregationInput = class ReportOrderByWithAggregationInput {
};
exports.ReportOrderByWithAggregationInput = ReportOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportOrderByWithAggregationInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportOrderByWithAggregationInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportOrderByWithAggregationInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportCountOrderByAggregateInput_1.ReportCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportCountOrderByAggregateInput_1.ReportCountOrderByAggregateInput)
], ReportOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportMaxOrderByAggregateInput_1.ReportMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportMaxOrderByAggregateInput_1.ReportMaxOrderByAggregateInput)
], ReportOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportMinOrderByAggregateInput_1.ReportMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportMinOrderByAggregateInput_1.ReportMinOrderByAggregateInput)
], ReportOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ReportOrderByWithAggregationInput = ReportOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportOrderByWithAggregationInput", {})
], ReportOrderByWithAggregationInput);
