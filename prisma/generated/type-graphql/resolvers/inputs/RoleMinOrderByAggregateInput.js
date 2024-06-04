"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoleMinOrderByAggregateInput = class RoleMinOrderByAggregateInput {
};
exports.RoleMinOrderByAggregateInput = RoleMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMinOrderByAggregateInput.prototype, "role", void 0);
exports.RoleMinOrderByAggregateInput = RoleMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleMinOrderByAggregateInput", {})
], RoleMinOrderByAggregateInput);
