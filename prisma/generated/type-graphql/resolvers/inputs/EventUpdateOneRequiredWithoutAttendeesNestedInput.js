"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateOneRequiredWithoutAttendeesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutAttendeesInput_1 = require("../inputs/EventCreateOrConnectWithoutAttendeesInput");
const EventCreateWithoutAttendeesInput_1 = require("../inputs/EventCreateWithoutAttendeesInput");
const EventUpdateToOneWithWhereWithoutAttendeesInput_1 = require("../inputs/EventUpdateToOneWithWhereWithoutAttendeesInput");
const EventUpsertWithoutAttendeesInput_1 = require("../inputs/EventUpsertWithoutAttendeesInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateOneRequiredWithoutAttendeesNestedInput = exports.EventUpdateOneRequiredWithoutAttendeesNestedInput = class EventUpdateOneRequiredWithoutAttendeesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutAttendeesInput_1.EventCreateWithoutAttendeesInput)
], EventUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateOrConnectWithoutAttendeesInput_1.EventCreateOrConnectWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateOrConnectWithoutAttendeesInput_1.EventCreateOrConnectWithoutAttendeesInput)
], EventUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpsertWithoutAttendeesInput_1.EventUpsertWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpsertWithoutAttendeesInput_1.EventUpsertWithoutAttendeesInput)
], EventUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateToOneWithWhereWithoutAttendeesInput_1.EventUpdateToOneWithWhereWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateToOneWithWhereWithoutAttendeesInput_1.EventUpdateToOneWithWhereWithoutAttendeesInput)
], EventUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "update", void 0);
exports.EventUpdateOneRequiredWithoutAttendeesNestedInput = EventUpdateOneRequiredWithoutAttendeesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateOneRequiredWithoutAttendeesNestedInput", {})
], EventUpdateOneRequiredWithoutAttendeesNestedInput);
