"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateNestedOneWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutInfoInput_1 = require("../inputs/EventCreateOrConnectWithoutInfoInput");
const EventCreateWithoutInfoInput_1 = require("../inputs/EventCreateWithoutInfoInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateNestedOneWithoutInfoInput = class EventCreateNestedOneWithoutInfoInput {
};
exports.EventCreateNestedOneWithoutInfoInput = EventCreateNestedOneWithoutInfoInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput)
], EventCreateNestedOneWithoutInfoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateOrConnectWithoutInfoInput_1.EventCreateOrConnectWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateOrConnectWithoutInfoInput_1.EventCreateOrConnectWithoutInfoInput)
], EventCreateNestedOneWithoutInfoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventCreateNestedOneWithoutInfoInput.prototype, "connect", void 0);
exports.EventCreateNestedOneWithoutInfoInput = EventCreateNestedOneWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateNestedOneWithoutInfoInput", {})
], EventCreateNestedOneWithoutInfoInput);
