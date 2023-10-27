"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutProfileInput_1 = require("../inputs/UserCreateWithoutProfileInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutProfileInput = exports.UserCreateOrConnectWithoutProfileInput = class UserCreateOrConnectWithoutProfileInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutProfileInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput)
], UserCreateOrConnectWithoutProfileInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutProfileInput = UserCreateOrConnectWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutProfileInput", {})
], UserCreateOrConnectWithoutProfileInput);
