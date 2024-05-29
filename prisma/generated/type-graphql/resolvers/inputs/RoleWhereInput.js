"use strict";
var RoleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRoleTagFilter_1 = require("../inputs/EnumRoleTagFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let RoleWhereInput = exports.RoleWhereInput = RoleWhereInput_1 = class RoleWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleTagFilter_1.EnumRoleTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleTagFilter_1.EnumRoleTagFilter)
], RoleWhereInput.prototype, "role", void 0);
exports.RoleWhereInput = RoleWhereInput = RoleWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleWhereInput", {})
], RoleWhereInput);
