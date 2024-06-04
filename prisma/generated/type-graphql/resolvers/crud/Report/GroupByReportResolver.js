"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByReportArgs_1 = require("./args/GroupByReportArgs");
const Report_1 = require("../../../models/Report");
const ReportGroupBy_1 = require("../../outputs/ReportGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReportResolver = class GroupByReportResolver {
    async groupByReport(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByReportResolver = GroupByReportResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReportGroupBy_1.ReportGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReportArgs_1.GroupByReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReportResolver.prototype, "groupByReport", null);
exports.GroupByReportResolver = GroupByReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], GroupByReportResolver);
