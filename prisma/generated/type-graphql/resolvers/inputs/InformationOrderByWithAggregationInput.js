"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCountOrderByAggregateInput_1 = require("../inputs/InformationCountOrderByAggregateInput");
const InformationMaxOrderByAggregateInput_1 = require("../inputs/InformationMaxOrderByAggregateInput");
const InformationMinOrderByAggregateInput_1 = require("../inputs/InformationMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InformationOrderByWithAggregationInput = class InformationOrderByWithAggregationInput {
};
exports.InformationOrderByWithAggregationInput = InformationOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], InformationOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationOrderByWithAggregationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], InformationOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationOrderByWithAggregationInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationOrderByWithAggregationInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationOrderByWithAggregationInput.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCountOrderByAggregateInput_1.InformationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCountOrderByAggregateInput_1.InformationCountOrderByAggregateInput)
], InformationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationMaxOrderByAggregateInput_1.InformationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationMaxOrderByAggregateInput_1.InformationMaxOrderByAggregateInput)
], InformationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationMinOrderByAggregateInput_1.InformationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationMinOrderByAggregateInput_1.InformationMinOrderByAggregateInput)
], InformationOrderByWithAggregationInput.prototype, "_min", void 0);
exports.InformationOrderByWithAggregationInput = InformationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationOrderByWithAggregationInput", {})
], InformationOrderByWithAggregationInput);
