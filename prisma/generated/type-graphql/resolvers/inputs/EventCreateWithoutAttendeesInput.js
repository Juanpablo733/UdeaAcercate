"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutEventInput_1 = require("../inputs/CommentCreateNestedManyWithoutEventInput");
const EventCreatehashtagsInput_1 = require("../inputs/EventCreatehashtagsInput");
const UserCreateNestedOneWithoutEventsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutEventsCreatedInput");
const Tag_1 = require("../../enums/Tag");
let EventCreateWithoutAttendeesInput = exports.EventCreateWithoutAttendeesInput = class EventCreateWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EventCreateWithoutAttendeesInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAttendeesInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreatehashtagsInput_1.EventCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreatehashtagsInput_1.EventCreatehashtagsInput)
], EventCreateWithoutAttendeesInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput)
], EventCreateWithoutAttendeesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutEventInput_1.CommentCreateNestedManyWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutEventInput_1.CommentCreateNestedManyWithoutEventInput)
], EventCreateWithoutAttendeesInput.prototype, "comments", void 0);
exports.EventCreateWithoutAttendeesInput = EventCreateWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateWithoutAttendeesInput", {})
], EventCreateWithoutAttendeesInput);
