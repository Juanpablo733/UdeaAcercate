"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoleMaxOrderByAggregateInput = exports.RoleMaxOrderByAggregateInput = class RoleMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxOrderByAggregateInput.prototype, "role", void 0);
exports.RoleMaxOrderByAggregateInput = RoleMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleMaxOrderByAggregateInput", {})
], RoleMaxOrderByAggregateInput);
