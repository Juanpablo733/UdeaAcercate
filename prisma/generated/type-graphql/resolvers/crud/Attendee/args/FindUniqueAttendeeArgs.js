"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeWhereUniqueInput_1 = require("../../../inputs/AttendeeWhereUniqueInput");
let FindUniqueAttendeeArgs = class FindUniqueAttendeeArgs {
};
exports.FindUniqueAttendeeArgs = FindUniqueAttendeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], FindUniqueAttendeeArgs.prototype, "where", void 0);
exports.FindUniqueAttendeeArgs = FindUniqueAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAttendeeArgs);
