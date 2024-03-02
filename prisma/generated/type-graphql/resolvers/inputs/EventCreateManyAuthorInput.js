"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreatehashtagsInput_1 = require("../inputs/EventCreatehashtagsInput");
const Tag_1 = require("../../enums/Tag");
let EventCreateManyAuthorInput = exports.EventCreateManyAuthorInput = class EventCreateManyAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EventCreateManyAuthorInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreatehashtagsInput_1.EventCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreatehashtagsInput_1.EventCreatehashtagsInput)
], EventCreateManyAuthorInput.prototype, "hashtags", void 0);
exports.EventCreateManyAuthorInput = EventCreateManyAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateManyAuthorInput", {})
], EventCreateManyAuthorInput);
