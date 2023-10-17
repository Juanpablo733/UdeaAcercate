"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateOneRequiredWithoutCommentsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateOrConnectWithoutCommentsInput_1 = require("../inputs/EventCreateOrConnectWithoutCommentsInput");
const EventCreateWithoutCommentsInput_1 = require("../inputs/EventCreateWithoutCommentsInput");
const EventUpdateToOneWithWhereWithoutCommentsInput_1 = require("../inputs/EventUpdateToOneWithWhereWithoutCommentsInput");
const EventUpsertWithoutCommentsInput_1 = require("../inputs/EventUpsertWithoutCommentsInput");
const EventWhereUniqueInput_1 = require("../inputs/EventWhereUniqueInput");
let EventUpdateOneRequiredWithoutCommentsNestedInput = exports.EventUpdateOneRequiredWithoutCommentsNestedInput = class EventUpdateOneRequiredWithoutCommentsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateWithoutCommentsInput_1.EventCreateWithoutCommentsInput)
], EventUpdateOneRequiredWithoutCommentsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateOrConnectWithoutCommentsInput_1.EventCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateOrConnectWithoutCommentsInput_1.EventCreateOrConnectWithoutCommentsInput)
], EventUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpsertWithoutCommentsInput_1.EventUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpsertWithoutCommentsInput_1.EventUpsertWithoutCommentsInput)
], EventUpdateOneRequiredWithoutCommentsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], EventUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateToOneWithWhereWithoutCommentsInput_1.EventUpdateToOneWithWhereWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateToOneWithWhereWithoutCommentsInput_1.EventUpdateToOneWithWhereWithoutCommentsInput)
], EventUpdateOneRequiredWithoutCommentsNestedInput.prototype, "update", void 0);
exports.EventUpdateOneRequiredWithoutCommentsNestedInput = EventUpdateOneRequiredWithoutCommentsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateOneRequiredWithoutCommentsNestedInput", {})
], EventUpdateOneRequiredWithoutCommentsNestedInput);
