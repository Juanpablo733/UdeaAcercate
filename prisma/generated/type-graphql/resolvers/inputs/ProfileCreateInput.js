"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreatesocialLinksInput_1 = require("../inputs/ProfileCreatesocialLinksInput");
const UserCreateNestedOneWithoutProfileInput_1 = require("../inputs/UserCreateNestedOneWithoutProfileInput");
const Campus_1 = require("../../enums/Campus");
const UserType_1 = require("../../enums/UserType");
let ProfileCreateInput = exports.ProfileCreateInput = class ProfileCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreatesocialLinksInput_1.ProfileCreatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreatesocialLinksInput_1.ProfileCreatesocialLinksInput)
], ProfileCreateInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput)
], ProfileCreateInput.prototype, "user", void 0);
exports.ProfileCreateInput = ProfileCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateInput", {})
], ProfileCreateInput);
