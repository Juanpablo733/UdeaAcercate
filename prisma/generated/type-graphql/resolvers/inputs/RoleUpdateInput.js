"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRoleTagFieldUpdateOperationsInput_1 = require("../inputs/EnumRoleTagFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RoleUpdateInput = exports.RoleUpdateInput = class RoleUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleTagFieldUpdateOperationsInput_1.EnumRoleTagFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleTagFieldUpdateOperationsInput_1.EnumRoleTagFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "role", void 0);
exports.RoleUpdateInput = RoleUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateInput", {})
], RoleUpdateInput);
