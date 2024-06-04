"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutAuthorInput_1 = require("../inputs/EventCreateWithoutAuthorInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventCreateOrConnectWithoutAuthorInput = class EventCreateOrConnectWithoutAuthorInput {
};
exports.EventCreateOrConnectWithoutAuthorInput = EventCreateOrConnectWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutAuthorInput_1.EventCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutAuthorInput_1.EventCreateWithoutAuthorInput)
], EventCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
exports.EventCreateOrConnectWithoutAuthorInput = EventCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateOrConnectWithoutAuthorInput", {})
], EventCreateOrConnectWithoutAuthorInput);
