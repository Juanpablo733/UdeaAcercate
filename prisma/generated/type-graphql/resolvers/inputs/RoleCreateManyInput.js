"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleTag_1 = require("../../enums/RoleTag");
let RoleCreateManyInput = class RoleCreateManyInput {
};
exports.RoleCreateManyInput = RoleCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateManyInput.prototype, "role", void 0);
exports.RoleCreateManyInput = RoleCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateManyInput", {})
], RoleCreateManyInput);
