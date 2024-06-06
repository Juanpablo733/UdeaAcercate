"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutInfoInput_1 = require("../inputs/CommentCreateNestedManyWithoutInfoInput");
const InformationCreatehashtagsInput_1 = require("../inputs/InformationCreatehashtagsInput");
const UserCreateNestedOneWithoutNewsCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutNewsCreatedInput");
const Tag_1 = require("../../enums/Tag");
let InformationCreateWithoutEventInput = class InformationCreateWithoutEventInput {
};
exports.InformationCreateWithoutEventInput = InformationCreateWithoutEventInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutEventInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutEventInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutEventInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InformationCreateWithoutEventInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutEventInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutEventInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreatehashtagsInput_1.InformationCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreatehashtagsInput_1.InformationCreatehashtagsInput)
], InformationCreateWithoutEventInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InformationCreateWithoutEventInput.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNewsCreatedInput_1.UserCreateNestedOneWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutNewsCreatedInput_1.UserCreateNestedOneWithoutNewsCreatedInput)
], InformationCreateWithoutEventInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutInfoInput_1.CommentCreateNestedManyWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutInfoInput_1.CommentCreateNestedManyWithoutInfoInput)
], InformationCreateWithoutEventInput.prototype, "comments", void 0);
exports.InformationCreateWithoutEventInput = InformationCreateWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateWithoutEventInput", {})
], InformationCreateWithoutEventInput);
