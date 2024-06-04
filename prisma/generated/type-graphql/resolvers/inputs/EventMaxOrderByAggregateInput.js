"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EventMaxOrderByAggregateInput = class EventMaxOrderByAggregateInput {
};
exports.EventMaxOrderByAggregateInput = EventMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxOrderByAggregateInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxOrderByAggregateInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMaxOrderByAggregateInput.prototype, "place", void 0);
exports.EventMaxOrderByAggregateInput = EventMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventMaxOrderByAggregateInput", {})
], EventMaxOrderByAggregateInput);
