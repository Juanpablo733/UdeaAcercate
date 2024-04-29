"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CommentSentimentScalarFieldEnum;
(function (CommentSentimentScalarFieldEnum) {
    CommentSentimentScalarFieldEnum["id"] = "id";
    CommentSentimentScalarFieldEnum["sentiment"] = "sentiment";
    CommentSentimentScalarFieldEnum["confidence"] = "confidence";
    CommentSentimentScalarFieldEnum["commentTag"] = "commentTag";
    CommentSentimentScalarFieldEnum["dateTime"] = "dateTime";
})(CommentSentimentScalarFieldEnum || (exports.CommentSentimentScalarFieldEnum = CommentSentimentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentSentimentScalarFieldEnum, {
    name: "CommentSentimentScalarFieldEnum",
    description: undefined,
});
