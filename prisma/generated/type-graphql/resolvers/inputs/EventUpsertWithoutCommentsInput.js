"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpsertWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutCommentsInput_1 = require("../inputs/EventCreateWithoutCommentsInput");
const EventUpdateWithoutCommentsInput_1 = require("../inputs/EventUpdateWithoutCommentsInput");
const EventWhereInput_1 = require("../inputs/EventWhereInput");
let EventUpsertWithoutCommentsInput = exports.EventUpsertWithoutCommentsInput = class EventUpsertWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutCommentsInput_1.EventUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutCommentsInput_1.EventUpdateWithoutCommentsInput)
], EventUpsertWithoutCommentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput)
], EventUpsertWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], EventUpsertWithoutCommentsInput.prototype, "where", void 0);
exports.EventUpsertWithoutCommentsInput = EventUpsertWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpsertWithoutCommentsInput", {})
], EventUpsertWithoutCommentsInput);
