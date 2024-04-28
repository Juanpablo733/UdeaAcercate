"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationOrderByWithAggregationInput_1 = require("../../../inputs/InformationOrderByWithAggregationInput");
const InformationScalarWhereWithAggregatesInput_1 = require("../../../inputs/InformationScalarWhereWithAggregatesInput");
const InformationWhereInput_1 = require("../../../inputs/InformationWhereInput");
const InformationScalarFieldEnum_1 = require("../../../../enums/InformationScalarFieldEnum");
let GroupByInformationArgs = exports.GroupByInformationArgs = class GroupByInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], GroupByInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationOrderByWithAggregationInput_1.InformationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInformationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationScalarFieldEnum_1.InformationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInformationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationScalarWhereWithAggregatesInput_1.InformationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationScalarWhereWithAggregatesInput_1.InformationScalarWhereWithAggregatesInput)
], GroupByInformationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInformationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInformationArgs.prototype, "skip", void 0);
exports.GroupByInformationArgs = GroupByInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInformationArgs);
