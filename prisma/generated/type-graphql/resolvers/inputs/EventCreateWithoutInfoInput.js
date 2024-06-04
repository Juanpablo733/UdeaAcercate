"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateNestedManyWithoutEventInput_1 = require("../inputs/AttendeeCreateNestedManyWithoutEventInput");
const UserCreateNestedOneWithoutEventsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutEventsCreatedInput");
let EventCreateWithoutInfoInput = class EventCreateWithoutInfoInput {
};
exports.EventCreateWithoutInfoInput = EventCreateWithoutInfoInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutInfoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutInfoInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput)
], EventCreateWithoutInfoInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput)
], EventCreateWithoutInfoInput.prototype, "attendees", void 0);
exports.EventCreateWithoutInfoInput = EventCreateWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateWithoutInfoInput", {})
], EventCreateWithoutInfoInput);
