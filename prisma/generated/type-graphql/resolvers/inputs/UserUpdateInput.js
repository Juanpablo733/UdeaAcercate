"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserNestedInput_1 = require("../inputs/AccountUpdateManyWithoutUserNestedInput");
const AttendeeUpdateManyWithoutUserNestedInput_1 = require("../inputs/AttendeeUpdateManyWithoutUserNestedInput");
const CommentUpdateManyWithoutUserNestedInput_1 = require("../inputs/CommentUpdateManyWithoutUserNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EventUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/EventUpdateManyWithoutAuthorNestedInput");
const InformationUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/InformationUpdateManyWithoutAuthorNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProfileUpdateOneWithoutUserNestedInput_1 = require("../inputs/ProfileUpdateOneWithoutUserNestedInput");
const SessionUpdateManyWithoutUserNestedInput_1 = require("../inputs/SessionUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateInput = class UserUpdateInput {
};
exports.UserUpdateInput = UserUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserNestedInput_1.ProfileUpdateOneWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdateOneWithoutUserNestedInput_1.ProfileUpdateOneWithoutUserNestedInput)
], UserUpdateInput.prototype, "profile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateManyWithoutAuthorNestedInput_1.EventUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateManyWithoutAuthorNestedInput_1.EventUpdateManyWithoutAuthorNestedInput)
], UserUpdateInput.prototype, "eventsCreated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyWithoutUserNestedInput_1.AttendeeUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyWithoutUserNestedInput_1.AttendeeUpdateManyWithoutUserNestedInput)
], UserUpdateInput.prototype, "attendees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutUserNestedInput_1.CommentUpdateManyWithoutUserNestedInput)
], UserUpdateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput)
], UserUpdateInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput)
], UserUpdateInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateManyWithoutAuthorNestedInput_1.InformationUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateManyWithoutAuthorNestedInput_1.InformationUpdateManyWithoutAuthorNestedInput)
], UserUpdateInput.prototype, "newsCreated", void 0);
exports.UserUpdateInput = UserUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateInput", {})
], UserUpdateInput);
