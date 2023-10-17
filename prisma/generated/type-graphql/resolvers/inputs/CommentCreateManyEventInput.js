"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCreateManyEventInput = exports.CommentCreateManyEventInput = class CommentCreateManyEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyEventInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyEventInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateManyEventInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyEventInput.prototype, "userId", void 0);
exports.CommentCreateManyEventInput = CommentCreateManyEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyEventInput", {})
], CommentCreateManyEventInput);
