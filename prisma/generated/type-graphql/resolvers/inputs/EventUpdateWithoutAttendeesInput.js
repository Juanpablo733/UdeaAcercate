"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutEventNestedInput_1 = require("../inputs/CommentUpdateManyWithoutEventNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTagFieldUpdateOperationsInput_1 = require("../inputs/EnumTagFieldUpdateOperationsInput");
const EventUpdatehashtagsInput_1 = require("../inputs/EventUpdatehashtagsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput");
let EventUpdateWithoutAttendeesInput = exports.EventUpdateWithoutAttendeesInput = class EventUpdateWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdatehashtagsInput_1.EventUpdatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdatehashtagsInput_1.EventUpdatehashtagsInput)
], EventUpdateWithoutAttendeesInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput)
], EventUpdateWithoutAttendeesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutEventNestedInput_1.CommentUpdateManyWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutEventNestedInput_1.CommentUpdateManyWithoutEventNestedInput)
], EventUpdateWithoutAttendeesInput.prototype, "comments", void 0);
exports.EventUpdateWithoutAttendeesInput = EventUpdateWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateWithoutAttendeesInput", {})
], EventUpdateWithoutAttendeesInput);
