"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutEventsCreatedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutEventsCreatedInput_1 = require("../inputs/UserUpdateWithoutEventsCreatedInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutEventsCreatedInput = exports.UserUpdateToOneWithWhereWithoutEventsCreatedInput = class UserUpdateToOneWithWhereWithoutEventsCreatedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutEventsCreatedInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutEventsCreatedInput_1.UserUpdateWithoutEventsCreatedInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutEventsCreatedInput_1.UserUpdateWithoutEventsCreatedInput)
], UserUpdateToOneWithWhereWithoutEventsCreatedInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutEventsCreatedInput = UserUpdateToOneWithWhereWithoutEventsCreatedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutEventsCreatedInput", {})
], UserUpdateToOneWithWhereWithoutEventsCreatedInput);
