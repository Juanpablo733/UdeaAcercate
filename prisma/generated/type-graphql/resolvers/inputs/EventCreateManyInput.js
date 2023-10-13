"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreatehashtagsInput_1 = require("../inputs/EventCreatehashtagsInput");
const Tag_1 = require("../../enums/Tag");
let EventCreateManyInput = exports.EventCreateManyInput = class EventCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EventCreateManyInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreatehashtagsInput_1.EventCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreatehashtagsInput_1.EventCreatehashtagsInput)
], EventCreateManyInput.prototype, "hashtags", void 0);
exports.EventCreateManyInput = EventCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateManyInput", {})
], EventCreateManyInput);
