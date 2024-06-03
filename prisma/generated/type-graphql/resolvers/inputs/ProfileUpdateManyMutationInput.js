"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableEnumCampusFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCampusFieldUpdateOperationsInput");
const NullableEnumUserTypeFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumUserTypeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProfileUpdatesocialLinksInput_1 = require("../inputs/ProfileUpdatesocialLinksInput");
let ProfileUpdateManyMutationInput = class ProfileUpdateManyMutationInput {
};
exports.ProfileUpdateManyMutationInput = ProfileUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumUserTypeFieldUpdateOperationsInput_1.NullableEnumUserTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumUserTypeFieldUpdateOperationsInput_1.NullableEnumUserTypeFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCampusFieldUpdateOperationsInput_1.NullableEnumCampusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCampusFieldUpdateOperationsInput_1.NullableEnumCampusFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProfileUpdateManyMutationInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdatesocialLinksInput_1.ProfileUpdatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdatesocialLinksInput_1.ProfileUpdatesocialLinksInput)
], ProfileUpdateManyMutationInput.prototype, "socialLinks", void 0);
exports.ProfileUpdateManyMutationInput = ProfileUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateManyMutationInput", {})
], ProfileUpdateManyMutationInput);
