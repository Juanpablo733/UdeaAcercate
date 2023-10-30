"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithWhereUniqueWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateWithoutEventInput_1 = require("../inputs/CommentUpdateWithoutEventInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateWithWhereUniqueWithoutEventInput = exports.CommentUpdateWithWhereUniqueWithoutEventInput = class CommentUpdateWithWhereUniqueWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateWithWhereUniqueWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutEventInput_1.CommentUpdateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutEventInput_1.CommentUpdateWithoutEventInput)
], CommentUpdateWithWhereUniqueWithoutEventInput.prototype, "data", void 0);
exports.CommentUpdateWithWhereUniqueWithoutEventInput = CommentUpdateWithWhereUniqueWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutEventInput", {})
], CommentUpdateWithWhereUniqueWithoutEventInput);
