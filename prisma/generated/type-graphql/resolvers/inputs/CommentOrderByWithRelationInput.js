"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationOrderByWithRelationInput_1 = require("../inputs/InformationOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentOrderByWithRelationInput = class CommentOrderByWithRelationInput {
};
exports.CommentOrderByWithRelationInput = CommentOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithRelationInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], CommentOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationOrderByWithRelationInput_1.InformationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationOrderByWithRelationInput_1.InformationOrderByWithRelationInput)
], CommentOrderByWithRelationInput.prototype, "info", void 0);
exports.CommentOrderByWithRelationInput = CommentOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentOrderByWithRelationInput", {})
], CommentOrderByWithRelationInput);
