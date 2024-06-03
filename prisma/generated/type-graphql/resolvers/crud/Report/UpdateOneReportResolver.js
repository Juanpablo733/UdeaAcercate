"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneReportArgs_1 = require("./args/UpdateOneReportArgs");
const Report_1 = require("../../../models/Report");
const helpers_1 = require("../../../helpers");
let UpdateOneReportResolver = class UpdateOneReportResolver {
    async updateOneReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneReportResolver = UpdateOneReportResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Report_1.Report, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneReportArgs_1.UpdateOneReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneReportResolver.prototype, "updateOneReport", null);
exports.UpdateOneReportResolver = UpdateOneReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], UpdateOneReportResolver);
