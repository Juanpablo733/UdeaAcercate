"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCreateManyInfoInput = class CommentCreateManyInfoInput {
};
exports.CommentCreateManyInfoInput = CommentCreateManyInfoInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyInfoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyInfoInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateManyInfoInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyInfoInput.prototype, "userId", void 0);
exports.CommentCreateManyInfoInput = CommentCreateManyInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyInfoInput", {})
], CommentCreateManyInfoInput);
