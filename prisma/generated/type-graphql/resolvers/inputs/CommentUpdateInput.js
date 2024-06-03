"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InformationUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/InformationUpdateOneRequiredWithoutCommentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput");
let CommentUpdateInput = class CommentUpdateInput {
};
exports.CommentUpdateInput = CommentUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsNestedInput_1.UserUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCommentsNestedInput_1.UserUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateOneRequiredWithoutCommentsNestedInput_1.InformationUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateOneRequiredWithoutCommentsNestedInput_1.InformationUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateInput.prototype, "info", void 0);
exports.CommentUpdateInput = CommentUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateInput", {})
], CommentUpdateInput);
