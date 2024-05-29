"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateNestedOneWithoutInfoInput_1 = require("../inputs/EventCreateNestedOneWithoutInfoInput");
const InformationCreatehashtagsInput_1 = require("../inputs/InformationCreatehashtagsInput");
const UserCreateNestedOneWithoutNewsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutNewsCreatedInput");
const Tag_1 = require("../../enums/Tag");
let InformationCreateWithoutCommentsInput = exports.InformationCreateWithoutCommentsInput = class InformationCreateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InformationCreateWithoutCommentsInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutCommentsInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreatehashtagsInput_1.InformationCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreatehashtagsInput_1.InformationCreatehashtagsInput)
], InformationCreateWithoutCommentsInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InformationCreateWithoutCommentsInput.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNewsCreatedInput_1.UserCreateNestedOneWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutNewsCreatedInput_1.UserCreateNestedOneWithoutNewsCreatedInput)
], InformationCreateWithoutCommentsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateNestedOneWithoutInfoInput_1.EventCreateNestedOneWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateNestedOneWithoutInfoInput_1.EventCreateNestedOneWithoutInfoInput)
], InformationCreateWithoutCommentsInput.prototype, "event", void 0);
exports.InformationCreateWithoutCommentsInput = InformationCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateWithoutCommentsInput", {})
], InformationCreateWithoutCommentsInput);
