"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutUserInput_1 = require("../inputs/CommentCreateNestedManyWithoutUserInput");
const EventCreateNestedManyWithoutAuthorInput_1 = require("../inputs/EventCreateNestedManyWithoutAuthorInput");
const InformationCreateNestedManyWithoutAuthorInput_1 = require("../inputs/InformationCreateNestedManyWithoutAuthorInput");
const ProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/ProfileCreateNestedOneWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutAttendeesInput = class UserCreateWithoutAttendeesInput {
};
exports.UserCreateWithoutAttendeesInput = UserCreateWithoutAttendeesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAttendeesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAttendeesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAttendeesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAttendeesInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAttendeesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAttendeesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAttendeesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput)
], UserCreateWithoutAttendeesInput.prototype, "profile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateNestedManyWithoutAuthorInput_1.EventCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateNestedManyWithoutAuthorInput_1.EventCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAttendeesInput.prototype, "eventsCreated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutUserInput_1.CommentCreateNestedManyWithoutUserInput)
], UserCreateWithoutAttendeesInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutAttendeesInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAttendeesInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateNestedManyWithoutAuthorInput_1.InformationCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateNestedManyWithoutAuthorInput_1.InformationCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAttendeesInput.prototype, "newsCreated", void 0);
exports.UserCreateWithoutAttendeesInput = UserCreateWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutAttendeesInput", {})
], UserCreateWithoutAttendeesInput);
