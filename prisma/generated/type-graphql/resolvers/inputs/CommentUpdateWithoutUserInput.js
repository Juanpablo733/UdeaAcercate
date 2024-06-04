"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InformationUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/InformationUpdateOneRequiredWithoutCommentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CommentUpdateWithoutUserInput = class CommentUpdateWithoutUserInput {
};
exports.CommentUpdateWithoutUserInput = CommentUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutUserInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutUserInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateOneRequiredWithoutCommentsNestedInput_1.InformationUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateOneRequiredWithoutCommentsNestedInput_1.InformationUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateWithoutUserInput.prototype, "info", void 0);
exports.CommentUpdateWithoutUserInput = CommentUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithoutUserInput", {})
], CommentUpdateWithoutUserInput);
