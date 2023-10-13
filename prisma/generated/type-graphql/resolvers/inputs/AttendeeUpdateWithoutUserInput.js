"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateOneRequiredWithoutAttendeesNestedInput_1 = require("../inputs/EventUpdateOneRequiredWithoutAttendeesNestedInput");
let AttendeeUpdateWithoutUserInput = exports.AttendeeUpdateWithoutUserInput = class AttendeeUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateOneRequiredWithoutAttendeesNestedInput_1.EventUpdateOneRequiredWithoutAttendeesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateOneRequiredWithoutAttendeesNestedInput_1.EventUpdateOneRequiredWithoutAttendeesNestedInput)
], AttendeeUpdateWithoutUserInput.prototype, "event", void 0);
exports.AttendeeUpdateWithoutUserInput = AttendeeUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateWithoutUserInput", {})
], AttendeeUpdateWithoutUserInput);
