"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileUpdateWithoutUserInput_1 = require("../inputs/ProfileUpdateWithoutUserInput");
const ProfileWhereInput_1 = require("../inputs/ProfileWhereInput");
let ProfileUpdateToOneWithWhereWithoutUserInput = class ProfileUpdateToOneWithWhereWithoutUserInput {
};
exports.ProfileUpdateToOneWithWhereWithoutUserInput = ProfileUpdateToOneWithWhereWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileUpdateToOneWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput)
], ProfileUpdateToOneWithWhereWithoutUserInput.prototype, "data", void 0);
exports.ProfileUpdateToOneWithWhereWithoutUserInput = ProfileUpdateToOneWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateToOneWithWhereWithoutUserInput", {})
], ProfileUpdateToOneWithWhereWithoutUserInput);
