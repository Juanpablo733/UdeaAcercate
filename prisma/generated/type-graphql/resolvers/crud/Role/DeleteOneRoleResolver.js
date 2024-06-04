"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneRoleArgs_1 = require("./args/DeleteOneRoleArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let DeleteOneRoleResolver = class DeleteOneRoleResolver {
    async deleteOneRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).role.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneRoleResolver = DeleteOneRoleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRoleArgs_1.DeleteOneRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneRoleResolver.prototype, "deleteOneRole", null);
exports.DeleteOneRoleResolver = DeleteOneRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], DeleteOneRoleResolver);
