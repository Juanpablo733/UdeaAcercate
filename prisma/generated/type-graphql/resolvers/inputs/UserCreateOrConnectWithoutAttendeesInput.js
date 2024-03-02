"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAttendeesInput_1 = require("../inputs/UserCreateWithoutAttendeesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAttendeesInput = exports.UserCreateOrConnectWithoutAttendeesInput = class UserCreateOrConnectWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAttendeesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAttendeesInput_1.UserCreateWithoutAttendeesInput)
], UserCreateOrConnectWithoutAttendeesInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutAttendeesInput = UserCreateOrConnectWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAttendeesInput", {})
], UserCreateOrConnectWithoutAttendeesInput);
