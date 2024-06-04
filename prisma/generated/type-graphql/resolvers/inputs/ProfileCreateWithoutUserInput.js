"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreatesocialLinksInput_1 = require("../inputs/ProfileCreatesocialLinksInput");
const Campus_1 = require("../../enums/Campus");
const UserType_1 = require("../../enums/UserType");
let ProfileCreateWithoutUserInput = class ProfileCreateWithoutUserInput {
};
exports.ProfileCreateWithoutUserInput = ProfileCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreatesocialLinksInput_1.ProfileCreatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreatesocialLinksInput_1.ProfileCreatesocialLinksInput)
], ProfileCreateWithoutUserInput.prototype, "socialLinks", void 0);
exports.ProfileCreateWithoutUserInput = ProfileCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateWithoutUserInput", {})
], ProfileCreateWithoutUserInput);
