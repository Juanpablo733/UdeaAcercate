"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserNestedInput_1 = require("../inputs/AccountUpdateManyWithoutUserNestedInput");
const AttendeeUpdateManyWithoutUserNestedInput_1 = require("../inputs/AttendeeUpdateManyWithoutUserNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EventUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/EventUpdateManyWithoutAuthorNestedInput");
const InformationUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/InformationUpdateManyWithoutAuthorNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProfileUpdateOneWithoutUserNestedInput_1 = require("../inputs/ProfileUpdateOneWithoutUserNestedInput");
const SessionUpdateManyWithoutUserNestedInput_1 = require("../inputs/SessionUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutCommentsInput = class UserUpdateWithoutCommentsInput {
};
exports.UserUpdateWithoutCommentsInput = UserUpdateWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserNestedInput_1.ProfileUpdateOneWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdateOneWithoutUserNestedInput_1.ProfileUpdateOneWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "profile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateManyWithoutAuthorNestedInput_1.EventUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateManyWithoutAuthorNestedInput_1.EventUpdateManyWithoutAuthorNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "eventsCreated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyWithoutUserNestedInput_1.AttendeeUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyWithoutUserNestedInput_1.AttendeeUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "attendees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateManyWithoutAuthorNestedInput_1.InformationUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateManyWithoutAuthorNestedInput_1.InformationUpdateManyWithoutAuthorNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "newsCreated", void 0);
exports.UserUpdateWithoutCommentsInput = UserUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutCommentsInput", {})
], UserUpdateWithoutCommentsInput);
