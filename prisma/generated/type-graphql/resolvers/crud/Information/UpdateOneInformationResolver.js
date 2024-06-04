"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneInformationArgs_1 = require("./args/UpdateOneInformationArgs");
const Information_1 = require("../../../models/Information");
const helpers_1 = require("../../../helpers");
let UpdateOneInformationResolver = class UpdateOneInformationResolver {
    async updateOneInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneInformationResolver = UpdateOneInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInformationArgs_1.UpdateOneInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneInformationResolver.prototype, "updateOneInformation", null);
exports.UpdateOneInformationResolver = UpdateOneInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], UpdateOneInformationResolver);
