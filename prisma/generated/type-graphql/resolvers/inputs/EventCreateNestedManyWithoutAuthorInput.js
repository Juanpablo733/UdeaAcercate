"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateManyAuthorInputEnvelope_1 = require("../inputs/EventCreateManyAuthorInputEnvelope");
const EventCreateOrConnectWithoutAuthorInput_1 = require("../inputs/EventCreateOrConnectWithoutAuthorInput");
const EventCreateWithoutAuthorInput_1 = require("../inputs/EventCreateWithoutAuthorInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateNestedManyWithoutAuthorInput = exports.EventCreateNestedManyWithoutAuthorInput = class EventCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventCreateWithoutAuthorInput_1.EventCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutAuthorInput_1.EventCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateManyAuthorInputEnvelope_1.EventCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateManyAuthorInputEnvelope_1.EventCreateManyAuthorInputEnvelope)
], EventCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereUniqueInput_1.EventWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
exports.EventCreateNestedManyWithoutAuthorInput = EventCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateNestedManyWithoutAuthorInput", {})
], EventCreateNestedManyWithoutAuthorInput);
