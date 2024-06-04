"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutEventsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const AttendeeCreateNestedManyWithoutUserInput_1 = require("../inputs/AttendeeCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const InformationCreateNestedManyWithoutAuthorInput_1 = require("../inputs/InformationCreateNestedManyWithoutAuthorInput");
const ProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/ProfileCreateNestedOneWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutEventsCreatedInput = class UserCreateWithoutEventsCreatedInput {
};
exports.UserCreateWithoutEventsCreatedInput = UserCreateWithoutEventsCreatedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutEventsCreatedInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutEventsCreatedInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutEventsCreatedInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutEventsCreatedInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutEventsCreatedInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutEventsCreatedInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutEventsCreatedInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput)
], UserCreateWithoutEventsCreatedInput.prototype, "profile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateNestedManyWithoutUserInput_1.AttendeeCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateNestedManyWithoutUserInput_1.AttendeeCreateNestedManyWithoutUserInput)
], UserCreateWithoutEventsCreatedInput.prototype, "attendees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateWithoutEventsCreatedInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutEventsCreatedInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutEventsCreatedInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateNestedManyWithoutAuthorInput_1.InformationCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateNestedManyWithoutAuthorInput_1.InformationCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutEventsCreatedInput.prototype, "newsCreated", void 0);
exports.UserCreateWithoutEventsCreatedInput = UserCreateWithoutEventsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutEventsCreatedInput", {})
], UserCreateWithoutEventsCreatedInput);
