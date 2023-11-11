"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmailTokenCountOrderByAggregateInput = exports.EmailTokenCountOrderByAggregateInput = class EmailTokenCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenCountOrderByAggregateInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenCountOrderByAggregateInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenCountOrderByAggregateInput.prototype, "expires", void 0);
exports.EmailTokenCountOrderByAggregateInput = EmailTokenCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenCountOrderByAggregateInput", {})
], EmailTokenCountOrderByAggregateInput);
