"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateNestedOneWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutCommentsInput_1 = require("../inputs/EventCreateOrConnectWithoutCommentsInput");
const EventCreateWithoutCommentsInput_1 = require("../inputs/EventCreateWithoutCommentsInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateNestedOneWithoutCommentsInput = exports.EventCreateNestedOneWithoutCommentsInput = class EventCreateNestedOneWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput)
], EventCreateNestedOneWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateOrConnectWithoutCommentsInput_1.EventCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateOrConnectWithoutCommentsInput_1.EventCreateOrConnectWithoutCommentsInput)
], EventCreateNestedOneWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventCreateNestedOneWithoutCommentsInput.prototype, "connect", void 0);
exports.EventCreateNestedOneWithoutCommentsInput = EventCreateNestedOneWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateNestedOneWithoutCommentsInput", {})
], EventCreateNestedOneWithoutCommentsInput);
