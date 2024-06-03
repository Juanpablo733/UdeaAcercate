"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneReportArgs_1 = require("./args/UpsertOneReportArgs");
const Report_1 = require("../../../models/Report");
const helpers_1 = require("../../../helpers");
let UpsertOneReportResolver = class UpsertOneReportResolver {
    async upsertOneReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneReportResolver = UpsertOneReportResolver;
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
], UpsertOneReportResolver.prototype, "upsertOneReport", null);
exports.UpsertOneReportResolver = UpsertOneReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], UpsertOneReportResolver);
