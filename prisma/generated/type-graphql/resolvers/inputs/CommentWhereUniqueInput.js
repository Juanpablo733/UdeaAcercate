"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentWhereInput_1 = require("../inputs/CommentWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const InformationRelationFilter_1 = require("../inputs/InformationRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let CommentWhereUniqueInput = class CommentWhereUniqueInput {
};
exports.CommentWhereUniqueInput = CommentWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1.CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1.CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereInput_1.CommentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereUniqueInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CommentWhereUniqueInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentWhereUniqueInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CommentWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationRelationFilter_1.InformationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationRelationFilter_1.InformationRelationFilter)
], CommentWhereUniqueInput.prototype, "info", void 0);
exports.CommentWhereUniqueInput = CommentWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentWhereUniqueInput", {})
], CommentWhereUniqueInput);
