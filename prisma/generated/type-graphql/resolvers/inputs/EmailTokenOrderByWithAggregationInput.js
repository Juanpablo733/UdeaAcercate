"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenCountOrderByAggregateInput_1 = require("../inputs/EmailTokenCountOrderByAggregateInput");
const EmailTokenMaxOrderByAggregateInput_1 = require("../inputs/EmailTokenMaxOrderByAggregateInput");
const EmailTokenMinOrderByAggregateInput_1 = require("../inputs/EmailTokenMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EmailTokenOrderByWithAggregationInput = class EmailTokenOrderByWithAggregationInput {
};
exports.EmailTokenOrderByWithAggregationInput = EmailTokenOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenOrderByWithAggregationInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenOrderByWithAggregationInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenOrderByWithAggregationInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenCountOrderByAggregateInput_1.EmailTokenCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenCountOrderByAggregateInput_1.EmailTokenCountOrderByAggregateInput)
], EmailTokenOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenMaxOrderByAggregateInput_1.EmailTokenMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenMaxOrderByAggregateInput_1.EmailTokenMaxOrderByAggregateInput)
], EmailTokenOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenMinOrderByAggregateInput_1.EmailTokenMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenMinOrderByAggregateInput_1.EmailTokenMinOrderByAggregateInput)
], EmailTokenOrderByWithAggregationInput.prototype, "_min", void 0);
exports.EmailTokenOrderByWithAggregationInput = EmailTokenOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenOrderByWithAggregationInput", {})
], EmailTokenOrderByWithAggregationInput);
