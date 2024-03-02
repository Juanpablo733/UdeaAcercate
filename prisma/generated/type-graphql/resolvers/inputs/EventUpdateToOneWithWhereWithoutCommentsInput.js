"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateToOneWithWhereWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateWithoutCommentsInput_1 = require("../inputs/EventUpdateWithoutCommentsInput");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventUpdateToOneWithWhereWithoutCommentsInput = exports.EventUpdateToOneWithWhereWithoutCommentsInput = class EventUpdateToOneWithWhereWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpdateToOneWithWhereWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutCommentsInput_1.EventUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutCommentsInput_1.EventUpdateWithoutCommentsInput)
], EventUpdateToOneWithWhereWithoutCommentsInput.prototype, "data", void 0);
exports.EventUpdateToOneWithWhereWithoutCommentsInput = EventUpdateToOneWithWhereWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateToOneWithWhereWithoutCommentsInput", {})
], EventUpdateToOneWithWhereWithoutCommentsInput);
