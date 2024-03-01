"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateToOneWithWhereWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateWithoutAttendeesInput_1 = require("../inputs/EventUpdateWithoutAttendeesInput");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventUpdateToOneWithWhereWithoutAttendeesInput = exports.EventUpdateToOneWithWhereWithoutAttendeesInput = class EventUpdateToOneWithWhereWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpdateToOneWithWhereWithoutAttendeesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutAttendeesInput_1.EventUpdateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutAttendeesInput_1.EventUpdateWithoutAttendeesInput)
], EventUpdateToOneWithWhereWithoutAttendeesInput.prototype, "data", void 0);
exports.EventUpdateToOneWithWhereWithoutAttendeesInput = EventUpdateToOneWithWhereWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateToOneWithWhereWithoutAttendeesInput", {})
], EventUpdateToOneWithWhereWithoutAttendeesInput);
