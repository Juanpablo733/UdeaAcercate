"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRoleOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRoleOrThrowArgs_1 = require("./args/FindFirstRoleOrThrowArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let FindFirstRoleOrThrowResolver = class FindFirstRoleOrThrowResolver {
    async findFirstRoleOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstRoleOrThrowResolver = FindFirstRoleOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRoleOrThrowArgs_1.FindFirstRoleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRoleOrThrowResolver.prototype, "findFirstRoleOrThrow", null);
exports.FindFirstRoleOrThrowResolver = FindFirstRoleOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], FindFirstRoleOrThrowResolver);
