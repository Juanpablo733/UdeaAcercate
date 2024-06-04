"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyInformationArgs_1 = require("./args/DeleteManyInformationArgs");
const Information_1 = require("../../../models/Information");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyInformationResolver = class DeleteManyInformationResolver {
    async deleteManyInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyInformationResolver = DeleteManyInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInformationArgs_1.DeleteManyInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyInformationResolver.prototype, "deleteManyInformation", null);
exports.DeleteManyInformationResolver = DeleteManyInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], DeleteManyInformationResolver);
