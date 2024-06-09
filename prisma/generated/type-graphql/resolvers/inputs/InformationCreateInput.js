"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutInfoInput_1 = require("../inputs/CommentCreateNestedManyWithoutInfoInput");
const EventCreateNestedOneWithoutInfoInput_1 = require("../inputs/EventCreateNestedOneWithoutInfoInput");
const InformationCreatehashtagsInput_1 = require("../inputs/InformationCreatehashtagsInput");
const UserCreateNestedOneWithoutNewsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutNewsCreatedInput");
const Tag_1 = require("../../enums/Tag");
let InformationCreateInput = class InformationCreateInput {
};
exports.InformationCreateInput = InformationCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InformationCreateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreatehashtagsInput_1.InformationCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreatehashtagsInput_1.InformationCreatehashtagsInput)
], InformationCreateInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InformationCreateInput.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNewsCreatedInput_1.UserCreateNestedOneWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutNewsCreatedInput_1.UserCreateNestedOneWithoutNewsCreatedInput)
], InformationCreateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutInfoInput_1.CommentCreateNestedManyWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutInfoInput_1.CommentCreateNestedManyWithoutInfoInput)
], InformationCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateNestedOneWithoutInfoInput_1.EventCreateNestedOneWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateNestedOneWithoutInfoInput_1.EventCreateNestedOneWithoutInfoInput)
], InformationCreateInput.prototype, "event", void 0);
exports.InformationCreateInput = InformationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateInput", {})
], InformationCreateInput);
