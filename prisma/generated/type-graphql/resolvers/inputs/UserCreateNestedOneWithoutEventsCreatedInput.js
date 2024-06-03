"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutEventsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutEventsCreatedInput_1 = require("../inputs/UserCreateOrConnectWithoutEventsCreatedInput");
const UserCreateWithoutEventsCreatedInput_1 = require("../inputs/UserCreateWithoutEventsCreatedInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutEventsCreatedInput = class UserCreateNestedOneWithoutEventsCreatedInput {
};
exports.UserCreateNestedOneWithoutEventsCreatedInput = UserCreateNestedOneWithoutEventsCreatedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput)
], UserCreateNestedOneWithoutEventsCreatedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEventsCreatedInput_1.UserCreateOrConnectWithoutEventsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutEventsCreatedInput_1.UserCreateOrConnectWithoutEventsCreatedInput)
], UserCreateNestedOneWithoutEventsCreatedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutEventsCreatedInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutEventsCreatedInput = UserCreateNestedOneWithoutEventsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutEventsCreatedInput", {})
], UserCreateNestedOneWithoutEventsCreatedInput);
