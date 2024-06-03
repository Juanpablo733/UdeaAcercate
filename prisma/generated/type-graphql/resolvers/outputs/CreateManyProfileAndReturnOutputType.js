"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProfileAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_1 = require("../outputs/User");
const Campus_1 = require("../../enums/Campus");
const UserType_1 = require("../../enums/UserType");
let CreateManyProfileAndReturnOutputType = class CreateManyProfileAndReturnOutputType {
};
exports.CreateManyProfileAndReturnOutputType = CreateManyProfileAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProfileAndReturnOutputType.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProfileAndReturnOutputType.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProfileAndReturnOutputType.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProfileAndReturnOutputType.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProfileAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProfileAndReturnOutputType.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProfileAndReturnOutputType.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProfileAndReturnOutputType.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManyProfileAndReturnOutputType.prototype, "user", void 0);
exports.CreateManyProfileAndReturnOutputType = CreateManyProfileAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyProfileAndReturnOutputType", {})
], CreateManyProfileAndReturnOutputType);
