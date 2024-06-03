"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEmailTokenArgs_1 = require("./args/AggregateEmailTokenArgs");
const CreateManyEmailTokenArgs_1 = require("./args/CreateManyEmailTokenArgs");
const CreateOneEmailTokenArgs_1 = require("./args/CreateOneEmailTokenArgs");
const DeleteManyEmailTokenArgs_1 = require("./args/DeleteManyEmailTokenArgs");
const DeleteOneEmailTokenArgs_1 = require("./args/DeleteOneEmailTokenArgs");
const FindFirstEmailTokenArgs_1 = require("./args/FindFirstEmailTokenArgs");
const FindFirstEmailTokenOrThrowArgs_1 = require("./args/FindFirstEmailTokenOrThrowArgs");
const FindManyEmailTokenArgs_1 = require("./args/FindManyEmailTokenArgs");
const FindUniqueEmailTokenArgs_1 = require("./args/FindUniqueEmailTokenArgs");
const FindUniqueEmailTokenOrThrowArgs_1 = require("./args/FindUniqueEmailTokenOrThrowArgs");
const GroupByEmailTokenArgs_1 = require("./args/GroupByEmailTokenArgs");
const UpdateManyEmailTokenArgs_1 = require("./args/UpdateManyEmailTokenArgs");
const UpdateOneEmailTokenArgs_1 = require("./args/UpdateOneEmailTokenArgs");
const UpsertOneEmailTokenArgs_1 = require("./args/UpsertOneEmailTokenArgs");
const helpers_1 = require("../../../helpers");
const EmailToken_1 = require("../../../models/EmailToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEmailToken_1 = require("../../outputs/AggregateEmailToken");
const EmailTokenGroupBy_1 = require("../../outputs/EmailTokenGroupBy");
let EmailTokenCrudResolver = class EmailTokenCrudResolver {
    async aggregateEmailToken(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEmailTokenOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async emailTokens(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async emailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByEmailToken(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneEmailToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.EmailTokenCrudResolver = EmailTokenCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEmailToken_1.AggregateEmailToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEmailTokenArgs_1.AggregateEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "aggregateEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEmailTokenArgs_1.CreateManyEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "createManyEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => EmailToken_1.EmailToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneEmailTokenArgs_1.CreateOneEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "createOneEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEmailTokenArgs_1.DeleteManyEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "deleteManyEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneEmailTokenArgs_1.DeleteOneEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "deleteOneEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmailTokenArgs_1.FindFirstEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "findFirstEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEmailTokenOrThrowArgs_1.FindFirstEmailTokenOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "findFirstEmailTokenOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EmailToken_1.EmailToken], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEmailTokenArgs_1.FindManyEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "emailTokens", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmailTokenArgs_1.FindUniqueEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "emailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEmailTokenOrThrowArgs_1.FindUniqueEmailTokenOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "getEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EmailTokenGroupBy_1.EmailTokenGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEmailTokenArgs_1.GroupByEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "groupByEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEmailTokenArgs_1.UpdateManyEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "updateManyEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => EmailToken_1.EmailToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneEmailTokenArgs_1.UpdateOneEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "updateOneEmailToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => EmailToken_1.EmailToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEmailTokenArgs_1.UpsertOneEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTokenCrudResolver.prototype, "upsertOneEmailToken", null);
exports.EmailTokenCrudResolver = EmailTokenCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], EmailTokenCrudResolver);
