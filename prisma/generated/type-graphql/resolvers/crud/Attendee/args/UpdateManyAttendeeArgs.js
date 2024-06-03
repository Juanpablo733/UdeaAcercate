"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateManyMutationInput_1 = require("../../../inputs/AttendeeUpdateManyMutationInput");
const AttendeeWhereInput_1 = require("../../../inputs/AttendeeWhereInput");
let UpdateManyAttendeeArgs = class UpdateManyAttendeeArgs {
};
exports.UpdateManyAttendeeArgs = UpdateManyAttendeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyMutationInput_1.AttendeeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyMutationInput_1.AttendeeUpdateManyMutationInput)
], UpdateManyAttendeeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], UpdateManyAttendeeArgs.prototype, "where", void 0);
exports.UpdateManyAttendeeArgs = UpdateManyAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAttendeeArgs);
