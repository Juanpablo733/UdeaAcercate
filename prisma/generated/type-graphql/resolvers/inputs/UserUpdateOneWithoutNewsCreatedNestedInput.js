"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutNewsCreatedNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutNewsCreatedInput_1 = require("../inputs/UserCreateOrConnectWithoutNewsCreatedInput");
const UserCreateWithoutNewsCreatedInput_1 = require("../inputs/UserCreateWithoutNewsCreatedInput");
const UserUpdateToOneWithWhereWithoutNewsCreatedInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutNewsCreatedInput");
const UserUpsertWithoutNewsCreatedInput_1 = require("../inputs/UserUpsertWithoutNewsCreatedInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutNewsCreatedNestedInput = class UserUpdateOneWithoutNewsCreatedNestedInput {
};
exports.UserUpdateOneWithoutNewsCreatedNestedInput = UserUpdateOneWithoutNewsCreatedNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutNewsCreatedInput_1.UserCreateWithoutNewsCreatedInput)
], UserUpdateOneWithoutNewsCreatedNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNewsCreatedInput_1.UserCreateOrConnectWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutNewsCreatedInput_1.UserCreateOrConnectWithoutNewsCreatedInput)
], UserUpdateOneWithoutNewsCreatedNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutNewsCreatedInput_1.UserUpsertWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutNewsCreatedInput_1.UserUpsertWithoutNewsCreatedInput)
], UserUpdateOneWithoutNewsCreatedNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutNewsCreatedNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateOneWithoutNewsCreatedNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutNewsCreatedNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutNewsCreatedInput_1.UserUpdateToOneWithWhereWithoutNewsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutNewsCreatedInput_1.UserUpdateToOneWithWhereWithoutNewsCreatedInput)
], UserUpdateOneWithoutNewsCreatedNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutNewsCreatedNestedInput = UserUpdateOneWithoutNewsCreatedNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneWithoutNewsCreatedNestedInput", {})
], UserUpdateOneWithoutNewsCreatedNestedInput);
