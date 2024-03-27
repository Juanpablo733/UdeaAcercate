"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleCountAggregate = exports.RoleCountAggregate = class RoleCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoleCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoleCountAggregate.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoleCountAggregate.prototype, "_all", void 0);
exports.RoleCountAggregate = RoleCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleCountAggregate", {})
], RoleCountAggregate);
