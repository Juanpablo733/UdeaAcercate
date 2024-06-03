"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmailTokenMinOrderByAggregateInput = class EmailTokenMinOrderByAggregateInput {
};
exports.EmailTokenMinOrderByAggregateInput = EmailTokenMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMinOrderByAggregateInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMinOrderByAggregateInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenMinOrderByAggregateInput.prototype, "expires", void 0);
exports.EmailTokenMinOrderByAggregateInput = EmailTokenMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenMinOrderByAggregateInput", {})
], EmailTokenMinOrderByAggregateInput);
