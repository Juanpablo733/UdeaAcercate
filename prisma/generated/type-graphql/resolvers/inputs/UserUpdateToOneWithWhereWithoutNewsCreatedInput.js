"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutNewsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutNewsCreatedInput_1 = require("../inputs/UserUpdateWithoutNewsCreatedInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutNewsCreatedInput = class UserUpdateToOneWithWhereWithoutNewsCreatedInput {
};
exports.UserUpdateToOneWithWhereWithoutNewsCreatedInput = UserUpdateToOneWithWhereWithoutNewsCreatedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutNewsCreatedInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutNewsCreatedInput_1.UserUpdateWithoutNewsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutNewsCreatedInput_1.UserUpdateWithoutNewsCreatedInput)
], UserUpdateToOneWithWhereWithoutNewsCreatedInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutNewsCreatedInput = UserUpdateToOneWithWhereWithoutNewsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutNewsCreatedInput", {})
], UserUpdateToOneWithWhereWithoutNewsCreatedInput);
