"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAttendeesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAttendeesInput_1 = require("../inputs/UserCreateOrConnectWithoutAttendeesInput");
const UserCreateWithoutAttendeesInput_1 = require("../inputs/UserCreateWithoutAttendeesInput");
const UserUpdateToOneWithWhereWithoutAttendeesInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutAttendeesInput");
const UserUpsertWithoutAttendeesInput_1 = require("../inputs/UserUpsertWithoutAttendeesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAttendeesNestedInput = class UserUpdateOneRequiredWithoutAttendeesNestedInput {
};
exports.UserUpdateOneRequiredWithoutAttendeesNestedInput = UserUpdateOneRequiredWithoutAttendeesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput)
], UserUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAttendeesInput_1.UserCreateOrConnectWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAttendeesInput_1.UserCreateOrConnectWithoutAttendeesInput)
], UserUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAttendeesInput_1.UserUpsertWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutAttendeesInput_1.UserUpsertWithoutAttendeesInput)
], UserUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutAttendeesInput_1.UserUpdateToOneWithWhereWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutAttendeesInput_1.UserUpdateToOneWithWhereWithoutAttendeesInput)
], UserUpdateOneRequiredWithoutAttendeesNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutAttendeesNestedInput = UserUpdateOneRequiredWithoutAttendeesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAttendeesNestedInput", {})
], UserUpdateOneRequiredWithoutAttendeesNestedInput);
