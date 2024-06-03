"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReportOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstReportOrThrowArgs_1 = require("./args/FindFirstReportOrThrowArgs");
const Report_1 = require("../../../models/Report");
const helpers_1 = require("../../../helpers");
let FindFirstReportOrThrowResolver = class FindFirstReportOrThrowResolver {
    async findFirstReportOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstReportOrThrowResolver = FindFirstReportOrThrowResolver;
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
], FindFirstReportOrThrowResolver.prototype, "findFirstReportOrThrow", null);
exports.FindFirstReportOrThrowResolver = FindFirstReportOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], FindFirstReportOrThrowResolver);
