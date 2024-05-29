"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateToOneWithWhereWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateWithoutInfoInput_1 = require("../inputs/EventUpdateWithoutInfoInput");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventUpdateToOneWithWhereWithoutInfoInput = exports.EventUpdateToOneWithWhereWithoutInfoInput = class EventUpdateToOneWithWhereWithoutInfoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpdateToOneWithWhereWithoutInfoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutInfoInput_1.EventUpdateWithoutInfoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutInfoInput_1.EventUpdateWithoutInfoInput)
], EventUpdateToOneWithWhereWithoutInfoInput.prototype, "data", void 0);
exports.EventUpdateToOneWithWhereWithoutInfoInput = EventUpdateToOneWithWhereWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateToOneWithWhereWithoutInfoInput", {})
], EventUpdateToOneWithWhereWithoutInfoInput);
