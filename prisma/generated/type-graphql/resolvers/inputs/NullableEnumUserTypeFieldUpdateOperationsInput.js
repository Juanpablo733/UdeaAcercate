"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumUserTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserType_1 = require("../../enums/UserType");
let NullableEnumUserTypeFieldUpdateOperationsInput = exports.NullableEnumUserTypeFieldUpdateOperationsInput = class NullableEnumUserTypeFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumUserTypeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumUserTypeFieldUpdateOperationsInput = NullableEnumUserTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumUserTypeFieldUpdateOperationsInput", {})
], NullableEnumUserTypeFieldUpdateOperationsInput);
