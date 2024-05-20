"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSentimentWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSentimentFilter_1 = require("../inputs/NestedEnumSentimentFilter");
const NestedEnumSentimentWithAggregatesFilter_1 = require("../inputs/NestedEnumSentimentWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Sentiment_1 = require("../../enums/Sentiment");
let EnumSentimentWithAggregatesFilter = exports.EnumSentimentWithAggregatesFilter = class EnumSentimentWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSentimentWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSentimentWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSentimentWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentWithAggregatesFilter_1.NestedEnumSentimentWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentWithAggregatesFilter_1.NestedEnumSentimentWithAggregatesFilter)
], EnumSentimentWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumSentimentWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentFilter_1.NestedEnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentFilter_1.NestedEnumSentimentFilter)
], EnumSentimentWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentFilter_1.NestedEnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentFilter_1.NestedEnumSentimentFilter)
], EnumSentimentWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumSentimentWithAggregatesFilter = EnumSentimentWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSentimentWithAggregatesFilter", {})
], EnumSentimentWithAggregatesFilter);
