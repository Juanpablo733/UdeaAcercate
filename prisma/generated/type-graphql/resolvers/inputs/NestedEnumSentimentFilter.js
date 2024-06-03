"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSentimentFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
let NestedEnumSentimentFilter = class NestedEnumSentimentFilter {
};
exports.NestedEnumSentimentFilter = NestedEnumSentimentFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSentimentFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSentimentFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSentimentFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentFilter)
], NestedEnumSentimentFilter.prototype, "not", void 0);
exports.NestedEnumSentimentFilter = NestedEnumSentimentFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSentimentFilter", {})
], NestedEnumSentimentFilter);
