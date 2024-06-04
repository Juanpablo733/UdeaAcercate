"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReportResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneReportArgs_1 = require("./args/CreateOneReportArgs");
const Report_1 = require("../../../models/Report");
const helpers_1 = require("../../../helpers");
let CreateOneReportResolver = class CreateOneReportResolver {
    async createOneReport(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).report.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneReportResolver = CreateOneReportResolver;
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
], CreateOneReportResolver.prototype, "createOneReport", null);
exports.CreateOneReportResolver = CreateOneReportResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Report_1.Report)
], CreateOneReportResolver);
