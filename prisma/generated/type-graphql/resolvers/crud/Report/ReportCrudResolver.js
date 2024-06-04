"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReportArgs_1 = require("./args/AggregateReportArgs");
const CreateManyReportArgs_1 = require("./args/CreateManyReportArgs");
const CreateOneReportArgs_1 = require("./args/CreateOneReportArgs");
const DeleteManyReportArgs_1 = require("./args/DeleteManyReportArgs");
const DeleteOneReportArgs_1 = require("./args/DeleteOneReportArgs");
const FindFirstReportArgs_1 = require("./args/FindFirstReportArgs");
const FindFirstReportOrThrowArgs_1 = require("./args/FindFirstReportOrThrowArgs");
const FindManyReportArgs_1 = require("./args/FindManyReportArgs");
const FindUniqueReportArgs_1 = require("./args/FindUniqueReportArgs");
const FindUniqueReportOrThrowArgs_1 = require("./args/FindUniqueReportOrThrowArgs");
const GroupByReportArgs_1 = require("./args/GroupByReportArgs");
const UpdateManyReportArgs_1 = require("./args/UpdateManyReportArgs");
const UpdateOneReportArgs_1 = require("./args/UpdateOneReportArgs");
const UpsertOneReportArgs_1 = require("./args/UpsertOneReportArgs");
const helpers_1 = require("../../../helpers");
const Report_1 = require("../../../models/Report");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReport_1 = require("../../outputs/AggregateReport");
const ReportGroupBy_1 = require("../../outputs/ReportGroupBy");
let ReportCrudResolver = class ReportCrudResolver {
    async aggregateReport(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).report.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReportOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reports(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async report(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByReport(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ReportCrudResolver = ReportCrudResolver;
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
], ReportCrudResolver.prototype, "aggregateReport", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReportArgs_1.CreateManyReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "createManyReport", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Report_1.Report, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneReportArgs_1.CreateOneReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "createOneReport", null);
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
], ReportCrudResolver.prototype, "deleteManyReport", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Report_1.Report, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneReportArgs_1.DeleteOneReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "deleteOneReport", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Report_1.Report, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReportArgs_1.FindFirstReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "findFirstReport", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Report_1.Report, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReportOrThrowArgs_1.FindFirstReportOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "findFirstReportOrThrow", null);
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
], ReportCrudResolver.prototype, "reports", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Report_1.Report, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReportArgs_1.FindUniqueReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "report", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Report_1.Report, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReportOrThrowArgs_1.FindUniqueReportOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "getReport", null);
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
], ReportCrudResolver.prototype, "groupByReport", null);
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
], ReportCrudResolver.prototype, "updateManyReport", null);
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
], ReportCrudResolver.prototype, "updateOneReport", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Report_1.Report, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReportArgs_1.UpsertOneReportArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReportCrudResolver.prototype, "upsertOneReport", null);
exports.ReportCrudResolver = ReportCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], ReportCrudResolver);
