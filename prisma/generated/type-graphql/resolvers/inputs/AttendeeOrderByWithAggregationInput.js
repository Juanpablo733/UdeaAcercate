"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCountOrderByAggregateInput_1 = require("../inputs/AttendeeCountOrderByAggregateInput");
const AttendeeMaxOrderByAggregateInput_1 = require("../inputs/AttendeeMaxOrderByAggregateInput");
const AttendeeMinOrderByAggregateInput_1 = require("../inputs/AttendeeMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AttendeeOrderByWithAggregationInput = exports.AttendeeOrderByWithAggregationInput = class AttendeeOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeOrderByWithAggregationInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeOrderByWithAggregationInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCountOrderByAggregateInput_1.AttendeeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCountOrderByAggregateInput_1.AttendeeCountOrderByAggregateInput)
], AttendeeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeMaxOrderByAggregateInput_1.AttendeeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeMaxOrderByAggregateInput_1.AttendeeMaxOrderByAggregateInput)
], AttendeeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeMinOrderByAggregateInput_1.AttendeeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeMinOrderByAggregateInput_1.AttendeeMinOrderByAggregateInput)
], AttendeeOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AttendeeOrderByWithAggregationInput = AttendeeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeOrderByWithAggregationInput", {})
], AttendeeOrderByWithAggregationInput);
