"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateWithoutAuthorInput_1 = require("../inputs/EventCreateWithoutAuthorInput");
const EventUpdateWithoutAuthorInput_1 = require("../inputs/EventUpdateWithoutAuthorInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpsertWithWhereUniqueWithoutAuthorInput = class EventUpsertWithWhereUniqueWithoutAuthorInput {
};
exports.EventUpsertWithWhereUniqueWithoutAuthorInput = EventUpsertWithWhereUniqueWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutAuthorInput_1.EventUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutAuthorInput_1.EventUpdateWithoutAuthorInput)
], EventUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutAuthorInput_1.EventCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutAuthorInput_1.EventCreateWithoutAuthorInput)
], EventUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
exports.EventUpsertWithWhereUniqueWithoutAuthorInput = EventUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpsertWithWhereUniqueWithoutAuthorInput", {})
], EventUpsertWithWhereUniqueWithoutAuthorInput);
