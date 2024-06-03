"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyReportArgs_1 = require("./args/FindManyReportArgs");
const Report_1 = require("../../../models/Report");
const helpers_1 = require("../../../helpers");
let FindManyReportResolver = class FindManyReportResolver {
    async reports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyReportResolver = FindManyReportResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Report_1.Report], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReportArgs_1.FindManyReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReportResolver.prototype, "reports", null);
exports.FindManyReportResolver = FindManyReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], FindManyReportResolver);
