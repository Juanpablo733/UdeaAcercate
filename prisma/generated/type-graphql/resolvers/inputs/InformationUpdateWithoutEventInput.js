"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutInfoNestedInput_1 = require("../inputs/CommentUpdateManyWithoutInfoNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTagFieldUpdateOperationsInput_1 = require("../inputs/EnumTagFieldUpdateOperationsInput");
const InformationUpdatehashtagsInput_1 = require("../inputs/InformationUpdatehashtagsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutNewsCreatedNestedInput_1 = require("../inputs/UserUpdateOneWithoutNewsCreatedNestedInput");
let InformationUpdateWithoutEventInput = class InformationUpdateWithoutEventInput {
};
exports.InformationUpdateWithoutEventInput = InformationUpdateWithoutEventInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InformationUpdateWithoutEventInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InformationUpdateWithoutEventInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InformationUpdateWithoutEventInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InformationUpdateWithoutEventInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], InformationUpdateWithoutEventInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput)
], InformationUpdateWithoutEventInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdatehashtagsInput_1.InformationUpdatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdatehashtagsInput_1.InformationUpdatehashtagsInput)
], InformationUpdateWithoutEventInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], InformationUpdateWithoutEventInput.prototype, "official", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutNewsCreatedNestedInput_1.UserUpdateOneWithoutNewsCreatedNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutNewsCreatedNestedInput_1.UserUpdateOneWithoutNewsCreatedNestedInput)
], InformationUpdateWithoutEventInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutInfoNestedInput_1.CommentUpdateManyWithoutInfoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutInfoNestedInput_1.CommentUpdateManyWithoutInfoNestedInput)
], InformationUpdateWithoutEventInput.prototype, "comments", void 0);
exports.InformationUpdateWithoutEventInput = InformationUpdateWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateWithoutEventInput", {})
], InformationUpdateWithoutEventInput);
