"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleTagFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleTag_1 = require("../../enums/RoleTag");
let EnumRoleTagFieldUpdateOperationsInput = exports.EnumRoleTagFieldUpdateOperationsInput = class EnumRoleTagFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRoleTagFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumRoleTagFieldUpdateOperationsInput = EnumRoleTagFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRoleTagFieldUpdateOperationsInput", {})
], EnumRoleTagFieldUpdateOperationsInput);
