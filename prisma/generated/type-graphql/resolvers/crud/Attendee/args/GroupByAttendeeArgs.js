"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeOrderByWithAggregationInput_1 = require("../../../inputs/AttendeeOrderByWithAggregationInput");
const AttendeeScalarWhereWithAggregatesInput_1 = require("../../../inputs/AttendeeScalarWhereWithAggregatesInput");
const AttendeeWhereInput_1 = require("../../../inputs/AttendeeWhereInput");
const AttendeeScalarFieldEnum_1 = require("../../../../enums/AttendeeScalarFieldEnum");
let GroupByAttendeeArgs = exports.GroupByAttendeeArgs = class GroupByAttendeeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], GroupByAttendeeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeOrderByWithAggregationInput_1.AttendeeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAttendeeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeScalarFieldEnum_1.AttendeeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAttendeeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeScalarWhereWithAggregatesInput_1.AttendeeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeScalarWhereWithAggregatesInput_1.AttendeeScalarWhereWithAggregatesInput)
], GroupByAttendeeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAttendeeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAttendeeArgs.prototype, "skip", void 0);
exports.GroupByAttendeeArgs = GroupByAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAttendeeArgs);
