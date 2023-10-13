"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithWhereUniqueWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutEventInput_1 = require("../inputs/CommentCreateWithoutEventInput");
const CommentUpdateWithoutEventInput_1 = require("../inputs/CommentUpdateWithoutEventInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpsertWithWhereUniqueWithoutEventInput = exports.CommentUpsertWithWhereUniqueWithoutEventInput = class CommentUpsertWithWhereUniqueWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpsertWithWhereUniqueWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutEventInput_1.CommentUpdateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutEventInput_1.CommentUpdateWithoutEventInput)
], CommentUpsertWithWhereUniqueWithoutEventInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutEventInput_1.CommentCreateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutEventInput_1.CommentCreateWithoutEventInput)
], CommentUpsertWithWhereUniqueWithoutEventInput.prototype, "create", void 0);
exports.CommentUpsertWithWhereUniqueWithoutEventInput = CommentUpsertWithWhereUniqueWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutEventInput", {})
], CommentUpsertWithWhereUniqueWithoutEventInput);
