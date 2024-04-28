"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAttendeesInput_1 = require("../inputs/UserCreateWithoutAttendeesInput");
const UserUpdateWithoutAttendeesInput_1 = require("../inputs/UserUpdateWithoutAttendeesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutAttendeesInput = exports.UserUpsertWithoutAttendeesInput = class UserUpsertWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAttendeesInput_1.UserUpdateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAttendeesInput_1.UserUpdateWithoutAttendeesInput)
], UserUpsertWithoutAttendeesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput)
], UserUpsertWithoutAttendeesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutAttendeesInput.prototype, "where", void 0);
exports.UserUpsertWithoutAttendeesInput = UserUpsertWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutAttendeesInput", {})
], UserUpsertWithoutAttendeesInput);
