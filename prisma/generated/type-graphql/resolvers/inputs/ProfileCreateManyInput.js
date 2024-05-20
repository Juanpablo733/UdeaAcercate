"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreatesocialLinksInput_1 = require("../inputs/ProfileCreatesocialLinksInput");
const Campus_1 = require("../../enums/Campus");
const UserType_1 = require("../../enums/UserType");
let ProfileCreateManyInput = exports.ProfileCreateManyInput = class ProfileCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateManyInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreatesocialLinksInput_1.ProfileCreatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreatesocialLinksInput_1.ProfileCreatesocialLinksInput)
], ProfileCreateManyInput.prototype, "socialLinks", void 0);
exports.ProfileCreateManyInput = ProfileCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateManyInput", {})
], ProfileCreateManyInput);
