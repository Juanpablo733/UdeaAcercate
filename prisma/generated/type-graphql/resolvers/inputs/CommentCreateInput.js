"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateNestedOneWithoutCommentsInput_1 = require("../inputs/InformationCreateNestedOneWithoutCommentsInput");
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateInput = class CommentCreateInput {
};
exports.CommentCreateInput = CommentCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateNestedOneWithoutCommentsInput_1.InformationCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateNestedOneWithoutCommentsInput_1.InformationCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "info", void 0);
exports.CommentCreateInput = CommentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateInput", {})
], CommentCreateInput);
