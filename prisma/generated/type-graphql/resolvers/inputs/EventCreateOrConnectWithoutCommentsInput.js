"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateOrConnectWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutCommentsInput_1 = require("../inputs/EventCreateWithoutCommentsInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateOrConnectWithoutCommentsInput = exports.EventCreateOrConnectWithoutCommentsInput = class EventCreateOrConnectWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput)
], EventCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
exports.EventCreateOrConnectWithoutCommentsInput = EventCreateOrConnectWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateOrConnectWithoutCommentsInput", {})
], EventCreateOrConnectWithoutCommentsInput);
