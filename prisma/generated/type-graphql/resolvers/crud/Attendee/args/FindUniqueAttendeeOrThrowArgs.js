"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttendeeOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeWhereUniqueInput_1 = require("../../../inputs/AttendeeWhereUniqueInput");
let FindUniqueAttendeeOrThrowArgs = class FindUniqueAttendeeOrThrowArgs {
};
exports.FindUniqueAttendeeOrThrowArgs = FindUniqueAttendeeOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], FindUniqueAttendeeOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueAttendeeOrThrowArgs = FindUniqueAttendeeOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAttendeeOrThrowArgs);
