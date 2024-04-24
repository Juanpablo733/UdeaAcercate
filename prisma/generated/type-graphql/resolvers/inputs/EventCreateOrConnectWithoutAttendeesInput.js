"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateOrConnectWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutAttendeesInput_1 = require("../inputs/EventCreateWithoutAttendeesInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateOrConnectWithoutAttendeesInput = exports.EventCreateOrConnectWithoutAttendeesInput = class EventCreateOrConnectWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventCreateOrConnectWithoutAttendeesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput)
], EventCreateOrConnectWithoutAttendeesInput.prototype, "create", void 0);
exports.EventCreateOrConnectWithoutAttendeesInput = EventCreateOrConnectWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateOrConnectWithoutAttendeesInput", {})
], EventCreateOrConnectWithoutAttendeesInput);
