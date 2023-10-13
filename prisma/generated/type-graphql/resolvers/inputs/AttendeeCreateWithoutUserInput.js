"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateNestedOneWithoutAttendeesInput_1 = require("../inputs/EventCreateNestedOneWithoutAttendeesInput");
let AttendeeCreateWithoutUserInput = exports.AttendeeCreateWithoutUserInput = class AttendeeCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateNestedOneWithoutAttendeesInput_1.EventCreateNestedOneWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateNestedOneWithoutAttendeesInput_1.EventCreateNestedOneWithoutAttendeesInput)
], AttendeeCreateWithoutUserInput.prototype, "event", void 0);
exports.AttendeeCreateWithoutUserInput = AttendeeCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateWithoutUserInput", {})
], AttendeeCreateWithoutUserInput);
