"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeWhereInput_1 = require("../../../inputs/AttendeeWhereInput");
let DeleteManyAttendeeArgs = class DeleteManyAttendeeArgs {
};
exports.DeleteManyAttendeeArgs = DeleteManyAttendeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], DeleteManyAttendeeArgs.prototype, "where", void 0);
exports.DeleteManyAttendeeArgs = DeleteManyAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAttendeeArgs);
