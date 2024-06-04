"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileOrderByWithAggregationInput_1 = require("../../../inputs/ProfileOrderByWithAggregationInput");
const ProfileScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProfileScalarWhereWithAggregatesInput");
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
const ProfileScalarFieldEnum_1 = require("../../../../enums/ProfileScalarFieldEnum");
let GroupByProfileArgs = class GroupByProfileArgs {
};
exports.GroupByProfileArgs = GroupByProfileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], GroupByProfileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileOrderByWithAggregationInput_1.ProfileOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProfileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileScalarFieldEnum_1.ProfileScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProfileArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileScalarWhereWithAggregatesInput_1.ProfileScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileScalarWhereWithAggregatesInput_1.ProfileScalarWhereWithAggregatesInput)
], GroupByProfileArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProfileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProfileArgs.prototype, "skip", void 0);
exports.GroupByProfileArgs = GroupByProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProfileArgs);
