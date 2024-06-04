"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeOrderByWithRelationInput_1 = require("../../../inputs/AttendeeOrderByWithRelationInput");
const AttendeeWhereInput_1 = require("../../../inputs/AttendeeWhereInput");
const AttendeeWhereUniqueInput_1 = require("../../../inputs/AttendeeWhereUniqueInput");
let AggregateAttendeeArgs = class AggregateAttendeeArgs {
};
exports.AggregateAttendeeArgs = AggregateAttendeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], AggregateAttendeeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeOrderByWithRelationInput_1.AttendeeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAttendeeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], AggregateAttendeeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAttendeeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAttendeeArgs.prototype, "skip", void 0);
exports.AggregateAttendeeArgs = AggregateAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAttendeeArgs);
