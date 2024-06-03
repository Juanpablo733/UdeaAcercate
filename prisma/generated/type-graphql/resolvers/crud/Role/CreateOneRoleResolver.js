"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneRoleArgs_1 = require("./args/CreateOneRoleArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let CreateOneRoleResolver = class CreateOneRoleResolver {
    async createOneRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).role.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneRoleResolver = CreateOneRoleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneRoleArgs_1.CreateOneRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneRoleResolver.prototype, "createOneRole", null);
exports.CreateOneRoleResolver = CreateOneRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], CreateOneRoleResolver);
