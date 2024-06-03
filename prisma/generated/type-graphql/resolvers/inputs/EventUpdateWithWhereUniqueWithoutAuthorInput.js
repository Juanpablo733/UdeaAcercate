"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventUpdateWithoutAuthorInput_1 = require("../inputs/EventUpdateWithoutAuthorInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateWithWhereUniqueWithoutAuthorInput = class EventUpdateWithWhereUniqueWithoutAuthorInput {
};
exports.EventUpdateWithWhereUniqueWithoutAuthorInput = EventUpdateWithWhereUniqueWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateWithoutAuthorInput_1.EventUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventUpdateWithoutAuthorInput_1.EventUpdateWithoutAuthorInput)
], EventUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
exports.EventUpdateWithWhereUniqueWithoutAuthorInput = EventUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateWithWhereUniqueWithoutAuthorInput", {})
], EventUpdateWithWhereUniqueWithoutAuthorInput);
