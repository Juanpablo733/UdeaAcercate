"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableEnumCampusFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCampusFieldUpdateOperationsInput");
const NullableEnumUserTypeFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumUserTypeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProfileUpdatehobbiesInput_1 = require("../inputs/ProfileUpdatehobbiesInput");
const ProfileUpdatesocialLinksInput_1 = require("../inputs/ProfileUpdatesocialLinksInput");
const UserUpdateOneRequiredWithoutProfileNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProfileNestedInput");
let ProfileUpdateInput = exports.ProfileUpdateInput = class ProfileUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumUserTypeFieldUpdateOperationsInput_1.NullableEnumUserTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumUserTypeFieldUpdateOperationsInput_1.NullableEnumUserTypeFieldUpdateOperationsInput)
], ProfileUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCampusFieldUpdateOperationsInput_1.NullableEnumCampusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCampusFieldUpdateOperationsInput_1.NullableEnumCampusFieldUpdateOperationsInput)
], ProfileUpdateInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdatehobbiesInput_1.ProfileUpdatehobbiesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdatehobbiesInput_1.ProfileUpdatehobbiesInput)
], ProfileUpdateInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdatesocialLinksInput_1.ProfileUpdatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdatesocialLinksInput_1.ProfileUpdatesocialLinksInput)
], ProfileUpdateInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProfileNestedInput_1.UserUpdateOneRequiredWithoutProfileNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutProfileNestedInput_1.UserUpdateOneRequiredWithoutProfileNestedInput)
], ProfileUpdateInput.prototype, "user", void 0);
exports.ProfileUpdateInput = ProfileUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateInput", {})
], ProfileUpdateInput);
