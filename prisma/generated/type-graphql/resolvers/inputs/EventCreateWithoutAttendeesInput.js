"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateNestedOneWithoutEventInput_1 = require("../inputs/InformationCreateNestedOneWithoutEventInput");
const UserCreateNestedOneWithoutEventsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutEventsCreatedInput");
let EventCreateWithoutAttendeesInput = exports.EventCreateWithoutAttendeesInput = class EventCreateWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput)
], EventCreateWithoutAttendeesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateNestedOneWithoutEventInput_1.InformationCreateNestedOneWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateNestedOneWithoutEventInput_1.InformationCreateNestedOneWithoutEventInput)
], EventCreateWithoutAttendeesInput.prototype, "info", void 0);
exports.EventCreateWithoutAttendeesInput = EventCreateWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateWithoutAttendeesInput", {})
], EventCreateWithoutAttendeesInput);
