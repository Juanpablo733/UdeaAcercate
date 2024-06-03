"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAttendeesInput_1 = require("../inputs/UserCreateOrConnectWithoutAttendeesInput");
const UserCreateWithoutAttendeesInput_1 = require("../inputs/UserCreateWithoutAttendeesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAttendeesInput = class UserCreateNestedOneWithoutAttendeesInput {
};
exports.UserCreateNestedOneWithoutAttendeesInput = UserCreateNestedOneWithoutAttendeesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput)
], UserCreateNestedOneWithoutAttendeesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAttendeesInput_1.UserCreateOrConnectWithoutAttendeesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAttendeesInput_1.UserCreateOrConnectWithoutAttendeesInput)
], UserCreateNestedOneWithoutAttendeesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAttendeesInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutAttendeesInput = UserCreateNestedOneWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAttendeesInput", {})
], UserCreateNestedOneWithoutAttendeesInput);
