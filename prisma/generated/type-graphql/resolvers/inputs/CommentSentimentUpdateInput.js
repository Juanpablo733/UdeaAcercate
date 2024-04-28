"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumSentimentFieldUpdateOperationsInput_1 = require("../inputs/EnumSentimentFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CommentSentimentUpdateInput = exports.CommentSentimentUpdateInput = class CommentSentimentUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentSentimentUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSentimentFieldUpdateOperationsInput_1.EnumSentimentFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSentimentFieldUpdateOperationsInput_1.EnumSentimentFieldUpdateOperationsInput)
], CommentSentimentUpdateInput.prototype, "sentiment", void 0);
exports.CommentSentimentUpdateInput = CommentSentimentUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentUpdateInput", {})
], CommentSentimentUpdateInput);
