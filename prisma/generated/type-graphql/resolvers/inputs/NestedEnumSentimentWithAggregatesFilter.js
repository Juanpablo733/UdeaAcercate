"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSentimentWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSentimentFilter_1 = require("../inputs/NestedEnumSentimentFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Sentiment_1 = require("../../enums/Sentiment");
let NestedEnumSentimentWithAggregatesFilter = class NestedEnumSentimentWithAggregatesFilter {
};
exports.NestedEnumSentimentWithAggregatesFilter = NestedEnumSentimentWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSentimentWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSentimentWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Sentiment_1.Sentiment], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSentimentWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentWithAggregatesFilter)
], NestedEnumSentimentWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumSentimentWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentFilter_1.NestedEnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentFilter_1.NestedEnumSentimentFilter)
], NestedEnumSentimentWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSentimentFilter_1.NestedEnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSentimentFilter_1.NestedEnumSentimentFilter)
], NestedEnumSentimentWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumSentimentWithAggregatesFilter = NestedEnumSentimentWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSentimentWithAggregatesFilter", {})
], NestedEnumSentimentWithAggregatesFilter);
