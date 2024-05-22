"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentiment = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Sentiment;
(function (Sentiment) {
    Sentiment["Positive"] = "Positive";
    Sentiment["Neutral"] = "Neutral";
    Sentiment["Negative"] = "Negative";
})(Sentiment || (exports.Sentiment = Sentiment = {}));
TypeGraphQL.registerEnumType(Sentiment, {
    name: "Sentiment",
    description: undefined,
});
