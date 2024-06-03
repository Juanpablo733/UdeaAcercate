"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutNewsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutNewsCreatedInput_1 = require("../inputs/UserCreateOrConnectWithoutNewsCreatedInput");
const UserCreateWithoutNewsCreatedInput_1 = require("../inputs/UserCreateWithoutNewsCreatedInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutNewsCreatedInput = class UserCreateNestedOneWithoutNewsCreatedInput {
};
exports.UserCreateNestedOneWithoutNewsCreatedInput = UserCreateNestedOneWithoutNewsCreatedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput)
], UserCreateNestedOneWithoutNewsCreatedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNewsCreatedInput_1.UserCreateOrConnectWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutNewsCreatedInput_1.UserCreateOrConnectWithoutNewsCreatedInput)
], UserCreateNestedOneWithoutNewsCreatedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutNewsCreatedInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutNewsCreatedInput = UserCreateNestedOneWithoutNewsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutNewsCreatedInput", {})
], UserCreateNestedOneWithoutNewsCreatedInput);
