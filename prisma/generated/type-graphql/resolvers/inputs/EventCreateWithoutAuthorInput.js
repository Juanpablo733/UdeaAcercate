"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateNestedManyWithoutEventInput_1 = require("../inputs/AttendeeCreateNestedManyWithoutEventInput");
const InformationCreateNestedOneWithoutEventInput_1 = require("../inputs/InformationCreateNestedOneWithoutEventInput");
let EventCreateWithoutAuthorInput = exports.EventCreateWithoutAuthorInput = class EventCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateNestedOneWithoutEventInput_1.InformationCreateNestedOneWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateNestedOneWithoutEventInput_1.InformationCreateNestedOneWithoutEventInput)
], EventCreateWithoutAuthorInput.prototype, "info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput)
], EventCreateWithoutAuthorInput.prototype, "attendees", void 0);
exports.EventCreateWithoutAuthorInput = EventCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateWithoutAuthorInput", {})
], EventCreateWithoutAuthorInput);
