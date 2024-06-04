"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutAttendeesInput_1 = require("../inputs/UserUpdateWithoutAttendeesInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutAttendeesInput = class UserUpdateToOneWithWhereWithoutAttendeesInput {
};
exports.UserUpdateToOneWithWhereWithoutAttendeesInput = UserUpdateToOneWithWhereWithoutAttendeesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutAttendeesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAttendeesInput_1.UserUpdateWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAttendeesInput_1.UserUpdateWithoutAttendeesInput)
], UserUpdateToOneWithWhereWithoutAttendeesInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutAttendeesInput = UserUpdateToOneWithWhereWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutAttendeesInput", {})
], UserUpdateToOneWithWhereWithoutAttendeesInput);
