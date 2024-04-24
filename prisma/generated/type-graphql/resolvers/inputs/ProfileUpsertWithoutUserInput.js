"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateWithoutUserInput_1 = require("../inputs/ProfileCreateWithoutUserInput");
const ProfileUpdateWithoutUserInput_1 = require("../inputs/ProfileUpdateWithoutUserInput");
const ProfileWhereInput_1 = require("../inputs/ProfileWhereInput");
let ProfileUpsertWithoutUserInput = exports.ProfileUpsertWithoutUserInput = class ProfileUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput)
], ProfileUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput)
], ProfileUpsertWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileUpsertWithoutUserInput.prototype, "where", void 0);
exports.ProfileUpsertWithoutUserInput = ProfileUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpsertWithoutUserInput", {})
], ProfileUpsertWithoutUserInput);
