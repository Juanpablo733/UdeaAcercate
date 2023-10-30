"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutEventInput_1 = require("../inputs/CommentCreateWithoutEventInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutEventInput = exports.CommentCreateOrConnectWithoutEventInput = class CommentCreateOrConnectWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutEventInput_1.CommentCreateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutEventInput_1.CommentCreateWithoutEventInput)
], CommentCreateOrConnectWithoutEventInput.prototype, "create", void 0);
exports.CommentCreateOrConnectWithoutEventInput = CommentCreateOrConnectWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutEventInput", {})
], CommentCreateOrConnectWithoutEventInput);
