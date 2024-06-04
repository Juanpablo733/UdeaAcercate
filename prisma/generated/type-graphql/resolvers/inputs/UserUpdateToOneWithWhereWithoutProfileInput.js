"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutProfileInput_1 = require("../inputs/UserUpdateWithoutProfileInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutProfileInput = class UserUpdateToOneWithWhereWithoutProfileInput {
};
exports.UserUpdateToOneWithWhereWithoutProfileInput = UserUpdateToOneWithWhereWithoutProfileInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutProfileInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutProfileInput_1.UserUpdateWithoutProfileInput)
], UserUpdateToOneWithWhereWithoutProfileInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutProfileInput = UserUpdateToOneWithWhereWithoutProfileInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutProfileInput", {})
], UserUpdateToOneWithWhereWithoutProfileInput);
