"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Campus_1 = require("../enums/Campus");
const UserType_1 = require("../enums/UserType");
let Profile = class Profile {
};
exports.Profile = Profile;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Profile.prototype, "socialLinks", void 0);
exports.Profile = Profile = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Profile", {})
], Profile);
