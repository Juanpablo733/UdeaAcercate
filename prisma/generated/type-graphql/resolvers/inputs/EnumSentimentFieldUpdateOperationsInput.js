"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSentimentFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
let EnumSentimentFieldUpdateOperationsInput = exports.EnumSentimentFieldUpdateOperationsInput = class EnumSentimentFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSentimentFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumSentimentFieldUpdateOperationsInput = EnumSentimentFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSentimentFieldUpdateOperationsInput", {})
], EnumSentimentFieldUpdateOperationsInput);
