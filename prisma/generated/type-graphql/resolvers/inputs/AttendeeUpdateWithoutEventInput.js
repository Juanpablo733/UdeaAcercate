"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateOneRequiredWithoutAttendeesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAttendeesNestedInput");
let AttendeeUpdateWithoutEventInput = exports.AttendeeUpdateWithoutEventInput = class AttendeeUpdateWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAttendeesNestedInput_1.UserUpdateOneRequiredWithoutAttendeesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutAttendeesNestedInput_1.UserUpdateOneRequiredWithoutAttendeesNestedInput)
], AttendeeUpdateWithoutEventInput.prototype, "user", void 0);
exports.AttendeeUpdateWithoutEventInput = AttendeeUpdateWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateWithoutEventInput", {})
], AttendeeUpdateWithoutEventInput);
