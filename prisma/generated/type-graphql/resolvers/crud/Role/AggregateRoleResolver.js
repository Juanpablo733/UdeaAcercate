"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRoleArgs_1 = require("./args/AggregateRoleArgs");
const Role_1 = require("../../../models/Role");
const AggregateRole_1 = require("../../outputs/AggregateRole");
const helpers_1 = require("../../../helpers");
let AggregateRoleResolver = class AggregateRoleResolver {
    async aggregateRole(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).role.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateRoleResolver = AggregateRoleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRole_1.AggregateRole, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRoleArgs_1.AggregateRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRoleResolver.prototype, "aggregateRole", null);
exports.AggregateRoleResolver = AggregateRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], AggregateRoleResolver);
