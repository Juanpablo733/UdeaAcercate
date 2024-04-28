"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutEventsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutEventsCreatedInput_1 = require("../inputs/UserCreateWithoutEventsCreatedInput");
const UserUpdateWithoutEventsCreatedInput_1 = require("../inputs/UserUpdateWithoutEventsCreatedInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutEventsCreatedInput = exports.UserUpsertWithoutEventsCreatedInput = class UserUpsertWithoutEventsCreatedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutEventsCreatedInput_1.UserUpdateWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutEventsCreatedInput_1.UserUpdateWithoutEventsCreatedInput)
], UserUpsertWithoutEventsCreatedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput)
], UserUpsertWithoutEventsCreatedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutEventsCreatedInput.prototype, "where", void 0);
exports.UserUpsertWithoutEventsCreatedInput = UserUpsertWithoutEventsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutEventsCreatedInput", {})
], UserUpsertWithoutEventsCreatedInput);
