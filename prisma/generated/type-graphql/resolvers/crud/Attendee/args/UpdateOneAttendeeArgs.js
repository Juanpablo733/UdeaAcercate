"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateInput_1 = require("../../../inputs/AttendeeUpdateInput");
const AttendeeWhereUniqueInput_1 = require("../../../inputs/AttendeeWhereUniqueInput");
let UpdateOneAttendeeArgs = class UpdateOneAttendeeArgs {
};
exports.UpdateOneAttendeeArgs = UpdateOneAttendeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateInput_1.AttendeeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateInput_1.AttendeeUpdateInput)
], UpdateOneAttendeeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], UpdateOneAttendeeArgs.prototype, "where", void 0);
exports.UpdateOneAttendeeArgs = UpdateOneAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAttendeeArgs);
