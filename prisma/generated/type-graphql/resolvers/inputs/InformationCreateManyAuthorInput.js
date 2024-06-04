"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreatehashtagsInput_1 = require("../inputs/InformationCreatehashtagsInput");
const Tag_1 = require("../../enums/Tag");
let InformationCreateManyAuthorInput = class InformationCreateManyAuthorInput {
};
exports.InformationCreateManyAuthorInput = InformationCreateManyAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateManyAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateManyAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateManyAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InformationCreateManyAuthorInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateManyAuthorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InformationCreateManyAuthorInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreatehashtagsInput_1.InformationCreatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreatehashtagsInput_1.InformationCreatehashtagsInput)
], InformationCreateManyAuthorInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InformationCreateManyAuthorInput.prototype, "official", void 0);
exports.InformationCreateManyAuthorInput = InformationCreateManyAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateManyAuthorInput", {})
], InformationCreateManyAuthorInput);
