"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateManyWithoutEventNestedInput_1 = require("../inputs/AttendeeUpdateManyWithoutEventNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTagFieldUpdateOperationsInput_1 = require("../inputs/EnumTagFieldUpdateOperationsInput");
const EventUpdatehashtagsInput_1 = require("../inputs/EventUpdatehashtagsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput");
let EventUpdateWithoutCommentsInput = exports.EventUpdateWithoutCommentsInput = class EventUpdateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutCommentsInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EventUpdateWithoutCommentsInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], EventUpdateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput)
], EventUpdateWithoutCommentsInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdatehashtagsInput_1.EventUpdatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdatehashtagsInput_1.EventUpdatehashtagsInput)
], EventUpdateWithoutCommentsInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput)
], EventUpdateWithoutCommentsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput)
], EventUpdateWithoutCommentsInput.prototype, "attendees", void 0);
exports.EventUpdateWithoutCommentsInput = EventUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateWithoutCommentsInput", {})
], EventUpdateWithoutCommentsInput);
