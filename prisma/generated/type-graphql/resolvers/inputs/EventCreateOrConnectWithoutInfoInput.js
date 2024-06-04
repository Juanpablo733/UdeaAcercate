"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateOrConnectWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutInfoInput_1 = require("../inputs/EventCreateWithoutInfoInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateOrConnectWithoutInfoInput = class EventCreateOrConnectWithoutInfoInput {
};
exports.EventCreateOrConnectWithoutInfoInput = EventCreateOrConnectWithoutInfoInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventCreateOrConnectWithoutInfoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput)
], EventCreateOrConnectWithoutInfoInput.prototype, "create", void 0);
exports.EventCreateOrConnectWithoutInfoInput = EventCreateOrConnectWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateOrConnectWithoutInfoInput", {})
], EventCreateOrConnectWithoutInfoInput);
