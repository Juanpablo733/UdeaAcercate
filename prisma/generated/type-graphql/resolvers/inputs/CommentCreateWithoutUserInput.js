"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateNestedOneWithoutCommentsInput_1 = require("../inputs/EventCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutUserInput = exports.CommentCreateWithoutUserInput = class CommentCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutUserInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutUserInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateNestedOneWithoutCommentsInput_1.EventCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateNestedOneWithoutCommentsInput_1.EventCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutUserInput.prototype, "event", void 0);
exports.CommentCreateWithoutUserInput = CommentCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutUserInput", {})
], CommentCreateWithoutUserInput);
