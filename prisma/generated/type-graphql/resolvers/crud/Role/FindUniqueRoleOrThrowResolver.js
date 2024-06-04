"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRoleOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueRoleOrThrowArgs_1 = require("./args/FindUniqueRoleOrThrowArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let FindUniqueRoleOrThrowResolver = class FindUniqueRoleOrThrowResolver {
    async getRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueRoleOrThrowResolver = FindUniqueRoleOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRoleOrThrowArgs_1.FindUniqueRoleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRoleOrThrowResolver.prototype, "getRole", null);
exports.FindUniqueRoleOrThrowResolver = FindUniqueRoleOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], FindUniqueRoleOrThrowResolver);
