"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyReportArgs_1 = require("./args/UpdateManyReportArgs");
const Report_1 = require("../../../models/Report");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyReportResolver = class UpdateManyReportResolver {
    async updateManyReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyReportResolver = UpdateManyReportResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReportArgs_1.UpdateManyReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyReportResolver.prototype, "updateManyReport", null);
exports.UpdateManyReportResolver = UpdateManyReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], UpdateManyReportResolver);
