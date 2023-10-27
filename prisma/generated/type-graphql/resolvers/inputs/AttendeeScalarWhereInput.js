"use strict";
var AttendeeScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let AttendeeScalarWhereInput = exports.AttendeeScalarWhereInput = AttendeeScalarWhereInput_1 = class AttendeeScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AttendeeScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AttendeeScalarWhereInput.prototype, "eventId", void 0);
exports.AttendeeScalarWhereInput = AttendeeScalarWhereInput = AttendeeScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeScalarWhereInput", {})
], AttendeeScalarWhereInput);
