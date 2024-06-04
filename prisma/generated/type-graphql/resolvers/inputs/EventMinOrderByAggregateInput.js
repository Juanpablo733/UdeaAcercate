"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EventMinOrderByAggregateInput = class EventMinOrderByAggregateInput {
};
exports.EventMinOrderByAggregateInput = EventMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinOrderByAggregateInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinOrderByAggregateInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventMinOrderByAggregateInput.prototype, "place", void 0);
exports.EventMinOrderByAggregateInput = EventMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventMinOrderByAggregateInput", {})
], EventMinOrderByAggregateInput);
