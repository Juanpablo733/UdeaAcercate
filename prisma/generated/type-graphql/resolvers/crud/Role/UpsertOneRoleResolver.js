"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneRoleArgs_1 = require("./args/UpsertOneRoleArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let UpsertOneRoleResolver = exports.UpsertOneRoleResolver = class UpsertOneRoleResolver {
    async upsertOneRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).role.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRoleArgs_1.UpsertOneRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneRoleResolver.prototype, "upsertOneRole", null);
exports.UpsertOneRoleResolver = UpsertOneRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], UpsertOneRoleResolver);
