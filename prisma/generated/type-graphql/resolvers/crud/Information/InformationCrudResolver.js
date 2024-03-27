"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInformationArgs_1 = require("./args/AggregateInformationArgs");
const CreateManyInformationArgs_1 = require("./args/CreateManyInformationArgs");
const CreateOneInformationArgs_1 = require("./args/CreateOneInformationArgs");
const DeleteManyInformationArgs_1 = require("./args/DeleteManyInformationArgs");
const DeleteOneInformationArgs_1 = require("./args/DeleteOneInformationArgs");
const FindFirstInformationArgs_1 = require("./args/FindFirstInformationArgs");
const FindFirstInformationOrThrowArgs_1 = require("./args/FindFirstInformationOrThrowArgs");
const FindManyInformationArgs_1 = require("./args/FindManyInformationArgs");
const FindUniqueInformationArgs_1 = require("./args/FindUniqueInformationArgs");
const FindUniqueInformationOrThrowArgs_1 = require("./args/FindUniqueInformationOrThrowArgs");
const GroupByInformationArgs_1 = require("./args/GroupByInformationArgs");
const UpdateManyInformationArgs_1 = require("./args/UpdateManyInformationArgs");
const UpdateOneInformationArgs_1 = require("./args/UpdateOneInformationArgs");
const UpsertOneInformationArgs_1 = require("./args/UpsertOneInformationArgs");
const helpers_1 = require("../../../helpers");
const Information_1 = require("../../../models/Information");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInformation_1 = require("../../outputs/AggregateInformation");
const InformationGroupBy_1 = require("../../outputs/InformationGroupBy");
let InformationCrudResolver = exports.InformationCrudResolver = class InformationCrudResolver {
    async aggregateInformation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).information.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInformationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueInformationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByInformation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInformation_1.AggregateInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInformationArgs_1.AggregateInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "aggregateInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInformationArgs_1.CreateManyInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "createManyInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Information_1.Information, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneInformationArgs_1.CreateOneInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "createOneInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInformationArgs_1.DeleteManyInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "deleteManyInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInformationArgs_1.DeleteOneInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "deleteOneInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInformationArgs_1.FindFirstInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "findFirstInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInformationOrThrowArgs_1.FindFirstInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "findFirstInformationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Information_1.Information], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInformationArgs_1.FindManyInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "findManyInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInformationArgs_1.FindUniqueInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "findUniqueInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInformationOrThrowArgs_1.FindUniqueInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "findUniqueInformationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InformationGroupBy_1.InformationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInformationArgs_1.GroupByInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "groupByInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInformationArgs_1.UpdateManyInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "updateManyInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInformationArgs_1.UpdateOneInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "updateOneInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Information_1.Information, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInformationArgs_1.UpsertOneInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationCrudResolver.prototype, "upsertOneInformation", null);
exports.InformationCrudResolver = InformationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], InformationCrudResolver);
