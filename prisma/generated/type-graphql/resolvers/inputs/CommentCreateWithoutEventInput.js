"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutEventInput = exports.CommentCreateWithoutEventInput = class CommentCreateWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutEventInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutEventInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutEventInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutEventInput.prototype, "user", void 0);
exports.CommentCreateWithoutEventInput = CommentCreateWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutEventInput", {})
], CommentCreateWithoutEventInput);
