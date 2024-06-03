"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutEventsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutEventsCreatedInput_1 = require("../inputs/UserCreateWithoutEventsCreatedInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutEventsCreatedInput = class UserCreateOrConnectWithoutEventsCreatedInput {
};
exports.UserCreateOrConnectWithoutEventsCreatedInput = UserCreateOrConnectWithoutEventsCreatedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutEventsCreatedInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput)
], UserCreateOrConnectWithoutEventsCreatedInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutEventsCreatedInput = UserCreateOrConnectWithoutEventsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutEventsCreatedInput", {})
], UserCreateOrConnectWithoutEventsCreatedInput);
