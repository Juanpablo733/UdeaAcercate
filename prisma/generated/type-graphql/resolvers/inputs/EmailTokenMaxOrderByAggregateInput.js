"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmailTokenMaxOrderByAggregateInput = exports.EmailTokenMaxOrderByAggregateInput = class EmailTokenMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMaxOrderByAggregateInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMaxOrderByAggregateInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMaxOrderByAggregateInput.prototype, "expires", void 0);
exports.EmailTokenMaxOrderByAggregateInput = EmailTokenMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenMaxOrderByAggregateInput", {})
], EmailTokenMaxOrderByAggregateInput);
