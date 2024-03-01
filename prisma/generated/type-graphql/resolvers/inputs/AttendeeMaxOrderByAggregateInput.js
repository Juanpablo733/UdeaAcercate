"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AttendeeMaxOrderByAggregateInput = exports.AttendeeMaxOrderByAggregateInput = class AttendeeMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeMaxOrderByAggregateInput.prototype, "eventId", void 0);
exports.AttendeeMaxOrderByAggregateInput = AttendeeMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeMaxOrderByAggregateInput", {})
], AttendeeMaxOrderByAggregateInput);
