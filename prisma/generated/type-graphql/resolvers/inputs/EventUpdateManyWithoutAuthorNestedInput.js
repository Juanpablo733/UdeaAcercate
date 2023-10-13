"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateManyWithoutAuthorNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateManyAuthorInputEnvelope_1 = require("../inputs/EventCreateManyAuthorInputEnvelope");
const EventCreateOrConnectWithoutAuthorInput_1 = require("../inputs/EventCreateOrConnectWithoutAuthorInput");
const EventCreateWithoutAuthorInput_1 = require("../inputs/EventCreateWithoutAuthorInput");
const EventScalarWhereInput_1 = require("../inputs/EventScalarWhereInput");
const EventUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/EventUpdateManyWithWhereWithoutAuthorInput");
const EventUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/EventUpdateWithWhereUniqueWithoutAuthorInput");
const EventUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/EventUpsertWithWhereUniqueWithoutAuthorInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateManyWithoutAuthorNestedInput = exports.EventUpdateManyWithoutAuthorNestedInput = class EventUpdateManyWithoutAuthorNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventCreateWithoutAuthorInput_1.EventCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutAuthorInput_1.EventCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutAuthorInput_1.EventUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateManyAuthorInputEnvelope_1.EventCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateManyAuthorInputEnvelope_1.EventCreateManyAuthorInputEnvelope)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereUniqueInput_1.EventWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereUniqueInput_1.EventWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereUniqueInput_1.EventWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereUniqueInput_1.EventWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutAuthorInput_1.EventUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutAuthorInput_1.EventUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventScalarWhereInput_1.EventScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
exports.EventUpdateManyWithoutAuthorNestedInput = EventUpdateManyWithoutAuthorNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateManyWithoutAuthorNestedInput", {})
], EventUpdateManyWithoutAuthorNestedInput);
