"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleTag_1 = require("../../enums/RoleTag");
let RoleMaxAggregate = class RoleMaxAggregate {
};
exports.RoleMaxAggregate = RoleMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleMaxAggregate.prototype, "role", void 0);
exports.RoleMaxAggregate = RoleMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleMaxAggregate", {})
], RoleMaxAggregate);
