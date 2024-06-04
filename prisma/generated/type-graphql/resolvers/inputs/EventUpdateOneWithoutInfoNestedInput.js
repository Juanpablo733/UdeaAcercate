"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateOneWithoutInfoNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutInfoInput_1 = require("../inputs/EventCreateOrConnectWithoutInfoInput");
const EventCreateWithoutInfoInput_1 = require("../inputs/EventCreateWithoutInfoInput");
const EventUpdateToOneWithWhereWithoutInfoInput_1 = require("../inputs/EventUpdateToOneWithWhereWithoutInfoInput");
const EventUpsertWithoutInfoInput_1 = require("../inputs/EventUpsertWithoutInfoInput");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateOneWithoutInfoNestedInput = class EventUpdateOneWithoutInfoNestedInput {
};
exports.EventUpdateOneWithoutInfoNestedInput = EventUpdateOneWithoutInfoNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput)
], EventUpdateOneWithoutInfoNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateOrConnectWithoutInfoInput_1.EventCreateOrConnectWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateOrConnectWithoutInfoInput_1.EventCreateOrConnectWithoutInfoInput)
], EventUpdateOneWithoutInfoNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpsertWithoutInfoInput_1.EventUpsertWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpsertWithoutInfoInput_1.EventUpsertWithoutInfoInput)
], EventUpdateOneWithoutInfoNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpdateOneWithoutInfoNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpdateOneWithoutInfoNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventUpdateOneWithoutInfoNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateToOneWithWhereWithoutInfoInput_1.EventUpdateToOneWithWhereWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateToOneWithWhereWithoutInfoInput_1.EventUpdateToOneWithWhereWithoutInfoInput)
], EventUpdateOneWithoutInfoNestedInput.prototype, "update", void 0);
exports.EventUpdateOneWithoutInfoNestedInput = EventUpdateOneWithoutInfoNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateOneWithoutInfoNestedInput", {})
], EventUpdateOneWithoutInfoNestedInput);
