"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateNestedOneWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutAttendeesInput_1 = require("../inputs/EventCreateOrConnectWithoutAttendeesInput");
const EventCreateWithoutAttendeesInput_1 = require("../inputs/EventCreateWithoutAttendeesInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateNestedOneWithoutAttendeesInput = class EventCreateNestedOneWithoutAttendeesInput {
};
exports.EventCreateNestedOneWithoutAttendeesInput = EventCreateNestedOneWithoutAttendeesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput)
], EventCreateNestedOneWithoutAttendeesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateOrConnectWithoutAttendeesInput_1.EventCreateOrConnectWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateOrConnectWithoutAttendeesInput_1.EventCreateOrConnectWithoutAttendeesInput)
], EventCreateNestedOneWithoutAttendeesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventCreateNestedOneWithoutAttendeesInput.prototype, "connect", void 0);
exports.EventCreateNestedOneWithoutAttendeesInput = EventCreateNestedOneWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateNestedOneWithoutAttendeesInput", {})
], EventCreateNestedOneWithoutAttendeesInput);
