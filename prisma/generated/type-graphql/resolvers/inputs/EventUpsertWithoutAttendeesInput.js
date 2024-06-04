"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpsertWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutAttendeesInput_1 = require("../inputs/EventCreateWithoutAttendeesInput");
const EventUpdateWithoutAttendeesInput_1 = require("../inputs/EventUpdateWithoutAttendeesInput");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventUpsertWithoutAttendeesInput = class EventUpsertWithoutAttendeesInput {
};
exports.EventUpsertWithoutAttendeesInput = EventUpsertWithoutAttendeesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutAttendeesInput_1.EventUpdateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutAttendeesInput_1.EventUpdateWithoutAttendeesInput)
], EventUpsertWithoutAttendeesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput)
], EventUpsertWithoutAttendeesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpsertWithoutAttendeesInput.prototype, "where", void 0);
exports.EventUpsertWithoutAttendeesInput = EventUpsertWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpsertWithoutAttendeesInput", {})
], EventUpsertWithoutAttendeesInput);
