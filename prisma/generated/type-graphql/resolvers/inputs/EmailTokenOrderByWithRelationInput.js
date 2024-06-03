"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmailTokenOrderByWithRelationInput = class EmailTokenOrderByWithRelationInput {
};
exports.EmailTokenOrderByWithRelationInput = EmailTokenOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenOrderByWithRelationInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenOrderByWithRelationInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenOrderByWithRelationInput.prototype, "expires", void 0);
exports.EmailTokenOrderByWithRelationInput = EmailTokenOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenOrderByWithRelationInput", {})
], EmailTokenOrderByWithRelationInput);
