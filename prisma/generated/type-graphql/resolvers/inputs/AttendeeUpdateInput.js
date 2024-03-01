"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateOneRequiredWithoutAttendeesNestedInput_1 = require("../inputs/EventUpdateOneRequiredWithoutAttendeesNestedInput");
const UserUpdateOneRequiredWithoutAttendeesNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAttendeesNestedInput");
let AttendeeUpdateInput = exports.AttendeeUpdateInput = class AttendeeUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAttendeesNestedInput_1.UserUpdateOneRequiredWithoutAttendeesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutAttendeesNestedInput_1.UserUpdateOneRequiredWithoutAttendeesNestedInput)
], AttendeeUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateOneRequiredWithoutAttendeesNestedInput_1.EventUpdateOneRequiredWithoutAttendeesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateOneRequiredWithoutAttendeesNestedInput_1.EventUpdateOneRequiredWithoutAttendeesNestedInput)
], AttendeeUpdateInput.prototype, "event", void 0);
exports.AttendeeUpdateInput = AttendeeUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateInput", {})
], AttendeeUpdateInput);
