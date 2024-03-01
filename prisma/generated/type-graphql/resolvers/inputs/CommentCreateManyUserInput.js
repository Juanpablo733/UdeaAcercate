"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCreateManyUserInput = exports.CommentCreateManyUserInput = class CommentCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyUserInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateManyUserInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyUserInput.prototype, "eventId", void 0);
exports.CommentCreateManyUserInput = CommentCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyUserInput", {})
], CommentCreateManyUserInput);
