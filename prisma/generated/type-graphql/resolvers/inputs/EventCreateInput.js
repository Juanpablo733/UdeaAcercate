"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateNestedManyWithoutEventInput_1 = require("../inputs/AttendeeCreateNestedManyWithoutEventInput");
const InformationCreateNestedOneWithoutEventInput_1 = require("../inputs/InformationCreateNestedOneWithoutEventInput");
const UserCreateNestedOneWithoutEventsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutEventsCreatedInput");
let EventCreateInput = class EventCreateInput {
};
exports.EventCreateInput = EventCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput)
], EventCreateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateNestedOneWithoutEventInput_1.InformationCreateNestedOneWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateNestedOneWithoutEventInput_1.InformationCreateNestedOneWithoutEventInput)
], EventCreateInput.prototype, "info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput)
], EventCreateInput.prototype, "attendees", void 0);
exports.EventCreateInput = EventCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateInput", {})
], EventCreateInput);
