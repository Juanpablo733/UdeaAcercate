"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutNewsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutNewsCreatedInput_1 = require("../inputs/UserCreateWithoutNewsCreatedInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutNewsCreatedInput = exports.UserCreateOrConnectWithoutNewsCreatedInput = class UserCreateOrConnectWithoutNewsCreatedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutNewsCreatedInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput)
], UserCreateOrConnectWithoutNewsCreatedInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutNewsCreatedInput = UserCreateOrConnectWithoutNewsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutNewsCreatedInput", {})
], UserCreateOrConnectWithoutNewsCreatedInput);
