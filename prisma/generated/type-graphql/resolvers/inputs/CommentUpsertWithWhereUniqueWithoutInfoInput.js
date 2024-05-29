"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithWhereUniqueWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutInfoInput_1 = require("../inputs/CommentCreateWithoutInfoInput");
const CommentUpdateWithoutInfoInput_1 = require("../inputs/CommentUpdateWithoutInfoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpsertWithWhereUniqueWithoutInfoInput = exports.CommentUpsertWithWhereUniqueWithoutInfoInput = class CommentUpsertWithWhereUniqueWithoutInfoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpsertWithWhereUniqueWithoutInfoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutInfoInput_1.CommentUpdateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutInfoInput_1.CommentUpdateWithoutInfoInput)
], CommentUpsertWithWhereUniqueWithoutInfoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutInfoInput_1.CommentCreateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutInfoInput_1.CommentCreateWithoutInfoInput)
], CommentUpsertWithWhereUniqueWithoutInfoInput.prototype, "create", void 0);
exports.CommentUpsertWithWhereUniqueWithoutInfoInput = CommentUpsertWithWhereUniqueWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutInfoInput", {})
], CommentUpsertWithWhereUniqueWithoutInfoInput);
