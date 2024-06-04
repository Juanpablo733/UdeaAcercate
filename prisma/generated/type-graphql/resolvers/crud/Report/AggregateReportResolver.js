"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReportArgs_1 = require("./args/AggregateReportArgs");
const Report_1 = require("../../../models/Report");
const AggregateReport_1 = require("../../outputs/AggregateReport");
const helpers_1 = require("../../../helpers");
let AggregateReportResolver = class AggregateReportResolver {
    async aggregateReport(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).report.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateReportResolver = AggregateReportResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReport_1.AggregateReport, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReportArgs_1.AggregateReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReportResolver.prototype, "aggregateReport", null);
exports.AggregateReportResolver = AggregateReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], AggregateReportResolver);
