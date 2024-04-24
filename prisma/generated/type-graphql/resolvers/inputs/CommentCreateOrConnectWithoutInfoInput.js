"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutInfoInput_1 = require("../inputs/CommentCreateWithoutInfoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutInfoInput = exports.CommentCreateOrConnectWithoutInfoInput = class CommentCreateOrConnectWithoutInfoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutInfoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutInfoInput_1.CommentCreateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutInfoInput_1.CommentCreateWithoutInfoInput)
], CommentCreateOrConnectWithoutInfoInput.prototype, "create", void 0);
exports.CommentCreateOrConnectWithoutInfoInput = CommentCreateOrConnectWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutInfoInput", {})
], CommentCreateOrConnectWithoutInfoInput);
