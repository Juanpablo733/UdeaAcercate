"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumSentimentFieldUpdateOperationsInput_1 = require("../inputs/EnumSentimentFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CommentSentimentUpdateManyMutationInput = exports.CommentSentimentUpdateManyMutationInput = class CommentSentimentUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentSentimentUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSentimentFieldUpdateOperationsInput_1.EnumSentimentFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSentimentFieldUpdateOperationsInput_1.EnumSentimentFieldUpdateOperationsInput)
], CommentSentimentUpdateManyMutationInput.prototype, "sentiment", void 0);
exports.CommentSentimentUpdateManyMutationInput = CommentSentimentUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentUpdateManyMutationInput", {})
], CommentSentimentUpdateManyMutationInput);
