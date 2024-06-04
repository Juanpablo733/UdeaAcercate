"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAttendeesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeOrderByWithRelationInput_1 = require("../../../inputs/AttendeeOrderByWithRelationInput");
const AttendeeWhereInput_1 = require("../../../inputs/AttendeeWhereInput");
const AttendeeWhereUniqueInput_1 = require("../../../inputs/AttendeeWhereUniqueInput");
const AttendeeScalarFieldEnum_1 = require("../../../../enums/AttendeeScalarFieldEnum");
let UserAttendeesArgs = class UserAttendeesArgs {
};
exports.UserAttendeesArgs = UserAttendeesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], UserAttendeesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeOrderByWithRelationInput_1.AttendeeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserAttendeesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], UserAttendeesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserAttendeesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserAttendeesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeScalarFieldEnum_1.AttendeeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserAttendeesArgs.prototype, "distinct", void 0);
exports.UserAttendeesArgs = UserAttendeesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserAttendeesArgs);
