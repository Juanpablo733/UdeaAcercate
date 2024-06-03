"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleTag_1 = require("../../enums/RoleTag");
let RoleCreateInput = class RoleCreateInput {
};
exports.RoleCreateInput = RoleCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateInput.prototype, "role", void 0);
exports.RoleCreateInput = RoleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateInput", {})
], RoleCreateInput);
