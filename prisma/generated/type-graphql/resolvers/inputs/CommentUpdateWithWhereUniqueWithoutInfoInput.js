"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithWhereUniqueWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateWithoutInfoInput_1 = require("../inputs/CommentUpdateWithoutInfoInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateWithWhereUniqueWithoutInfoInput = exports.CommentUpdateWithWhereUniqueWithoutInfoInput = class CommentUpdateWithWhereUniqueWithoutInfoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateWithWhereUniqueWithoutInfoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutInfoInput_1.CommentUpdateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutInfoInput_1.CommentUpdateWithoutInfoInput)
], CommentUpdateWithWhereUniqueWithoutInfoInput.prototype, "data", void 0);
exports.CommentUpdateWithWhereUniqueWithoutInfoInput = CommentUpdateWithWhereUniqueWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutInfoInput", {})
], CommentUpdateWithWhereUniqueWithoutInfoInput);
