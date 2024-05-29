"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutInfoInput_1 = require("../inputs/CommentCreateNestedManyWithoutInfoInput");
const EventCreateNestedOneWithoutInfoInput_1 = require("../inputs/EventCreateNestedOneWithoutInfoInput");
const InformationCreatehashtagsInput_1 = require("../inputs/InformationCreatehashtagsInput");
const Tag_1 = require("../../enums/Tag");
let InformationCreateWithoutAuthorInput = exports.InformationCreateWithoutAuthorInput = class InformationCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InformationCreateWithoutAuthorInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutAuthorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateWithoutAuthorInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreatehashtagsInput_1.InformationCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreatehashtagsInput_1.InformationCreatehashtagsInput)
], InformationCreateWithoutAuthorInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InformationCreateWithoutAuthorInput.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutInfoInput_1.CommentCreateNestedManyWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutInfoInput_1.CommentCreateNestedManyWithoutInfoInput)
], InformationCreateWithoutAuthorInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateNestedOneWithoutInfoInput_1.EventCreateNestedOneWithoutInfoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventCreateNestedOneWithoutInfoInput_1.EventCreateNestedOneWithoutInfoInput)
], InformationCreateWithoutAuthorInput.prototype, "event", void 0);
exports.InformationCreateWithoutAuthorInput = InformationCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateWithoutAuthorInput", {})
], InformationCreateWithoutAuthorInput);
