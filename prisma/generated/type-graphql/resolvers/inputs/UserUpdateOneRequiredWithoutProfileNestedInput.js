"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutProfileNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutProfileInput_1 = require("../inputs/UserCreateOrConnectWithoutProfileInput");
const UserCreateWithoutProfileInput_1 = require("../inputs/UserCreateWithoutProfileInput");
const UserUpdateToOneWithWhereWithoutProfileInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutProfileInput");
const UserUpsertWithoutProfileInput_1 = require("../inputs/UserUpsertWithoutProfileInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutProfileNestedInput = class UserUpdateOneRequiredWithoutProfileNestedInput {
};
exports.UserUpdateOneRequiredWithoutProfileNestedInput = UserUpdateOneRequiredWithoutProfileNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProfileInput_1.UserCreateWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProfileInput_1.UserCreateOrConnectWithoutProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutProfileInput_1.UserCreateOrConnectWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutProfileInput_1.UserUpsertWithoutProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutProfileInput_1.UserUpsertWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutProfileInput_1.UserUpdateToOneWithWhereWithoutProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutProfileInput_1.UserUpdateToOneWithWhereWithoutProfileInput)
], UserUpdateOneRequiredWithoutProfileNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutProfileNestedInput = UserUpdateOneRequiredWithoutProfileNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProfileNestedInput", {})
], UserUpdateOneRequiredWithoutProfileNestedInput);
