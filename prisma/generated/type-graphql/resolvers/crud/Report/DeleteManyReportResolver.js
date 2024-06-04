"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyReportArgs_1 = require("./args/DeleteManyReportArgs");
const Report_1 = require("../../../models/Report");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyReportResolver = class DeleteManyReportResolver {
    async deleteManyReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyReportResolver = DeleteManyReportResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReportArgs_1.DeleteManyReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyReportResolver.prototype, "deleteManyReport", null);
exports.DeleteManyReportResolver = DeleteManyReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], DeleteManyReportResolver);
