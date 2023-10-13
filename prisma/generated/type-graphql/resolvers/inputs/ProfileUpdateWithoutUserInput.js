"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableEnumCampusFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCampusFieldUpdateOperationsInput");
const NullableEnumUserTypeFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumUserTypeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProfileUpdatehobbiesInput_1 = require("../inputs/ProfileUpdatehobbiesInput");
const ProfileUpdatesocialLinksInput_1 = require("../inputs/ProfileUpdatesocialLinksInput");
let ProfileUpdateWithoutUserInput = exports.ProfileUpdateWithoutUserInput = class ProfileUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateWithoutUserInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateWithoutUserInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumUserTypeFieldUpdateOperationsInput_1.NullableEnumUserTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumUserTypeFieldUpdateOperationsInput_1.NullableEnumUserTypeFieldUpdateOperationsInput)
], ProfileUpdateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCampusFieldUpdateOperationsInput_1.NullableEnumCampusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCampusFieldUpdateOperationsInput_1.NullableEnumCampusFieldUpdateOperationsInput)
], ProfileUpdateWithoutUserInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdatehobbiesInput_1.ProfileUpdatehobbiesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdatehobbiesInput_1.ProfileUpdatehobbiesInput)
], ProfileUpdateWithoutUserInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdatesocialLinksInput_1.ProfileUpdatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdatesocialLinksInput_1.ProfileUpdatesocialLinksInput)
], ProfileUpdateWithoutUserInput.prototype, "socialLinks", void 0);
exports.ProfileUpdateWithoutUserInput = ProfileUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateWithoutUserInput", {})
], ProfileUpdateWithoutUserInput);
