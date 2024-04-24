"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateInput_1 = require("../../../inputs/AttendeeCreateInput");
const AttendeeUpdateInput_1 = require("../../../inputs/AttendeeUpdateInput");
const AttendeeWhereUniqueInput_1 = require("../../../inputs/AttendeeWhereUniqueInput");
let UpsertOneAttendeeArgs = exports.UpsertOneAttendeeArgs = class UpsertOneAttendeeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], UpsertOneAttendeeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateInput_1.AttendeeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeCreateInput_1.AttendeeCreateInput)
], UpsertOneAttendeeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateInput_1.AttendeeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateInput_1.AttendeeUpdateInput)
], UpsertOneAttendeeArgs.prototype, "update", void 0);
exports.UpsertOneAttendeeArgs = UpsertOneAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAttendeeArgs);
