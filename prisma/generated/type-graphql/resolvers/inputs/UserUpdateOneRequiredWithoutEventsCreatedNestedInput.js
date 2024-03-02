"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutEventsCreatedNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutEventsCreatedInput_1 = require("../inputs/UserCreateOrConnectWithoutEventsCreatedInput");
const UserCreateWithoutEventsCreatedInput_1 = require("../inputs/UserCreateWithoutEventsCreatedInput");
const UserUpdateToOneWithWhereWithoutEventsCreatedInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutEventsCreatedInput");
const UserUpsertWithoutEventsCreatedInput_1 = require("../inputs/UserUpsertWithoutEventsCreatedInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutEventsCreatedNestedInput = exports.UserUpdateOneRequiredWithoutEventsCreatedNestedInput = class UserUpdateOneRequiredWithoutEventsCreatedNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutEventsCreatedInput_1.UserCreateWithoutEventsCreatedInput)
], UserUpdateOneRequiredWithoutEventsCreatedNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEventsCreatedInput_1.UserCreateOrConnectWithoutEventsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutEventsCreatedInput_1.UserCreateOrConnectWithoutEventsCreatedInput)
], UserUpdateOneRequiredWithoutEventsCreatedNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutEventsCreatedInput_1.UserUpsertWithoutEventsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutEventsCreatedInput_1.UserUpsertWithoutEventsCreatedInput)
], UserUpdateOneRequiredWithoutEventsCreatedNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutEventsCreatedNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutEventsCreatedInput_1.UserUpdateToOneWithWhereWithoutEventsCreatedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutEventsCreatedInput_1.UserUpdateToOneWithWhereWithoutEventsCreatedInput)
], UserUpdateOneRequiredWithoutEventsCreatedNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutEventsCreatedNestedInput = UserUpdateOneRequiredWithoutEventsCreatedNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutEventsCreatedNestedInput", {})
], UserUpdateOneRequiredWithoutEventsCreatedNestedInput);
