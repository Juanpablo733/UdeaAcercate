"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutAttendeesInput_1 = require("../inputs/UserCreateNestedOneWithoutAttendeesInput");
let AttendeeCreateWithoutEventInput = exports.AttendeeCreateWithoutEventInput = class AttendeeCreateWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AttendeeCreateWithoutEventInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAttendeesInput_1.UserCreateNestedOneWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAttendeesInput_1.UserCreateNestedOneWithoutAttendeesInput)
], AttendeeCreateWithoutEventInput.prototype, "user", void 0);
exports.AttendeeCreateWithoutEventInput = AttendeeCreateWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateWithoutEventInput", {})
], AttendeeCreateWithoutEventInput);
