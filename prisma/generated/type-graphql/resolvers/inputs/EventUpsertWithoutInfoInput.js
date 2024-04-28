"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpsertWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutInfoInput_1 = require("../inputs/EventCreateWithoutInfoInput");
const EventUpdateWithoutInfoInput_1 = require("../inputs/EventUpdateWithoutInfoInput");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventUpsertWithoutInfoInput = exports.EventUpsertWithoutInfoInput = class EventUpsertWithoutInfoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutInfoInput_1.EventUpdateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutInfoInput_1.EventUpdateWithoutInfoInput)
], EventUpsertWithoutInfoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutInfoInput_1.EventCreateWithoutInfoInput)
], EventUpsertWithoutInfoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpsertWithoutInfoInput.prototype, "where", void 0);
exports.EventUpsertWithoutInfoInput = EventUpsertWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpsertWithoutInfoInput", {})
], EventUpsertWithoutInfoInput);
