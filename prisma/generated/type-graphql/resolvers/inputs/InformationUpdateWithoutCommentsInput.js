"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTagFieldUpdateOperationsInput_1 = require("../inputs/EnumTagFieldUpdateOperationsInput");
const EventUpdateOneWithoutInfoNestedInput_1 = require("../inputs/EventUpdateOneWithoutInfoNestedInput");
const InformationUpdatehashtagsInput_1 = require("../inputs/InformationUpdatehashtagsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InformationUpdateWithoutCommentsInput = exports.InformationUpdateWithoutCommentsInput = class InformationUpdateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InformationUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InformationUpdateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InformationUpdateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InformationUpdateWithoutCommentsInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], InformationUpdateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTagFieldUpdateOperationsInput_1.EnumTagFieldUpdateOperationsInput)
], InformationUpdateWithoutCommentsInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdatehashtagsInput_1.InformationUpdatehashtagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdatehashtagsInput_1.InformationUpdatehashtagsInput)
], InformationUpdateWithoutCommentsInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventUpdateOneWithoutInfoNestedInput_1.EventUpdateOneWithoutInfoNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventUpdateOneWithoutInfoNestedInput_1.EventUpdateOneWithoutInfoNestedInput)
], InformationUpdateWithoutCommentsInput.prototype, "event", void 0);
exports.InformationUpdateWithoutCommentsInput = InformationUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateWithoutCommentsInput", {})
], InformationUpdateWithoutCommentsInput);
