"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenOrderByWithAggregationInput_1 = require("../../../inputs/EmailTokenOrderByWithAggregationInput");
const EmailTokenScalarWhereWithAggregatesInput_1 = require("../../../inputs/EmailTokenScalarWhereWithAggregatesInput");
const EmailTokenWhereInput_1 = require("../../../inputs/EmailTokenWhereInput");
const EmailTokenScalarFieldEnum_1 = require("../../../../enums/EmailTokenScalarFieldEnum");
let GroupByEmailTokenArgs = class GroupByEmailTokenArgs {
};
exports.GroupByEmailTokenArgs = GroupByEmailTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereInput_1.EmailTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereInput_1.EmailTokenWhereInput)
], GroupByEmailTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenOrderByWithAggregationInput_1.EmailTokenOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmailTokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenScalarFieldEnum_1.EmailTokenScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEmailTokenArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenScalarWhereWithAggregatesInput_1.EmailTokenScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenScalarWhereWithAggregatesInput_1.EmailTokenScalarWhereWithAggregatesInput)
], GroupByEmailTokenArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmailTokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEmailTokenArgs.prototype, "skip", void 0);
exports.GroupByEmailTokenArgs = GroupByEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEmailTokenArgs);
