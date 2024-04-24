"use strict";
var RoleScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRoleTagWithAggregatesFilter_1 = require("../inputs/EnumRoleTagWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let RoleScalarWhereWithAggregatesInput = exports.RoleScalarWhereWithAggregatesInput = RoleScalarWhereWithAggregatesInput_1 = class RoleScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], RoleScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleTagWithAggregatesFilter_1.EnumRoleTagWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleTagWithAggregatesFilter_1.EnumRoleTagWithAggregatesFilter)
], RoleScalarWhereWithAggregatesInput.prototype, "role", void 0);
exports.RoleScalarWhereWithAggregatesInput = RoleScalarWhereWithAggregatesInput = RoleScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleScalarWhereWithAggregatesInput", {})
], RoleScalarWhereWithAggregatesInput);
