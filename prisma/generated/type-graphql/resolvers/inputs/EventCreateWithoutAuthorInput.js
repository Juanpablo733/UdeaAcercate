"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateNestedManyWithoutEventInput_1 = require("../inputs/AttendeeCreateNestedManyWithoutEventInput");
const CommentCreateNestedManyWithoutEventInput_1 = require("../inputs/CommentCreateNestedManyWithoutEventInput");
const EventCreatehashtagsInput_1 = require("../inputs/EventCreatehashtagsInput");
const Tag_1 = require("../../enums/Tag");
let EventCreateWithoutAuthorInput = exports.EventCreateWithoutAuthorInput = class EventCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EventCreateWithoutAuthorInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateWithoutAuthorInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreatehashtagsInput_1.EventCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreatehashtagsInput_1.EventCreatehashtagsInput)
], EventCreateWithoutAuthorInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutEventInput_1.CommentCreateNestedManyWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutEventInput_1.CommentCreateNestedManyWithoutEventInput)
], EventCreateWithoutAuthorInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCreateNestedManyWithoutEventInput_1.AttendeeCreateNestedManyWithoutEventInput)
], EventCreateWithoutAuthorInput.prototype, "attendees", void 0);
exports.EventCreateWithoutAuthorInput = EventCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateWithoutAuthorInput", {})
], EventCreateWithoutAuthorInput);
