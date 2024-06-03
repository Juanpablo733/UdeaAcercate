"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyInformationArgs_1 = require("./args/UpdateManyInformationArgs");
const Information_1 = require("../../../models/Information");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyInformationResolver = class UpdateManyInformationResolver {
    async updateManyInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyInformationResolver = UpdateManyInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInformationArgs_1.UpdateManyInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyInformationResolver.prototype, "updateManyInformation", null);
exports.UpdateManyInformationResolver = UpdateManyInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], UpdateManyInformationResolver);
