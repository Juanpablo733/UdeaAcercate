"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutProfileInput_1 = require("../inputs/UserCreateWithoutProfileInput");
const UserUpdateWithoutProfileInput_1 = require("../inputs/UserUpdateWithoutProfileInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutProfileInput = class UserUpsertWithoutProfileInput {
};
exports.UserUpsertWithoutProfileInput = UserUpsertWithoutProfileInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput)
], UserUpsertWithoutProfileInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput)
], UserUpsertWithoutProfileInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutProfileInput.prototype, "where", void 0);
exports.UserUpsertWithoutProfileInput = UserUpsertWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutProfileInput", {})
], UserUpsertWithoutProfileInput);
