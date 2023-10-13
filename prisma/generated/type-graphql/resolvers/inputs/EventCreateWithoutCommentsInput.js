"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateNestedManyWithoutEventInput_1 = require("../inputs/AttendeeCreateNestedManyWithoutEventInput");
const EventCreatehashtagsInput_1 = require("../inputs/EventCreatehashtagsInput");
const UserCreateNestedOneWithoutEventsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutEventsCreatedInput");
const Tag_1 = require("../../enums/Tag");
let EventCreateWithoutCommentsInput = exports.EventCreateWithoutCommentsInput = class EventCreateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutCommentsInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EventCreateWithoutCommentsInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutCommentsInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreatehashtagsInput_1.EventCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreatehashtagsInput_1.EventCreatehashtagsInput)
], EventCreateWithoutCommentsInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutEventsCreatedInput_1.UserCreateNestedOneWithoutEventsCreatedInput)
], EventCreateWithoutCommentsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput)
], EventCreateWithoutCommentsInput.prototype, "attendees", void 0);
exports.EventCreateWithoutCommentsInput = EventCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateWithoutCommentsInput", {})
], EventCreateWithoutCommentsInput);
