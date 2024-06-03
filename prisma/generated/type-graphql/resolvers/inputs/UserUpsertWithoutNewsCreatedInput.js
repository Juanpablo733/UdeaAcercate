"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutNewsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutNewsCreatedInput_1 = require("../inputs/UserCreateWithoutNewsCreatedInput");
const UserUpdateWithoutNewsCreatedInput_1 = require("../inputs/UserUpdateWithoutNewsCreatedInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutNewsCreatedInput = class UserUpsertWithoutNewsCreatedInput {
};
exports.UserUpsertWithoutNewsCreatedInput = UserUpsertWithoutNewsCreatedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutNewsCreatedInput_1.UserUpdateWithoutNewsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutNewsCreatedInput_1.UserUpdateWithoutNewsCreatedInput)
], UserUpsertWithoutNewsCreatedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput)
], UserUpsertWithoutNewsCreatedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutNewsCreatedInput.prototype, "where", void 0);
exports.UserUpsertWithoutNewsCreatedInput = UserUpsertWithoutNewsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutNewsCreatedInput", {})
], UserUpsertWithoutNewsCreatedInput);
