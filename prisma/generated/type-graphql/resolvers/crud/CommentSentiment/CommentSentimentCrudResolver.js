"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCommentSentimentArgs_1 = require("./args/AggregateCommentSentimentArgs");
const CreateManyCommentSentimentArgs_1 = require("./args/CreateManyCommentSentimentArgs");
const CreateOneCommentSentimentArgs_1 = require("./args/CreateOneCommentSentimentArgs");
const DeleteManyCommentSentimentArgs_1 = require("./args/DeleteManyCommentSentimentArgs");
const DeleteOneCommentSentimentArgs_1 = require("./args/DeleteOneCommentSentimentArgs");
const FindFirstCommentSentimentArgs_1 = require("./args/FindFirstCommentSentimentArgs");
const FindFirstCommentSentimentOrThrowArgs_1 = require("./args/FindFirstCommentSentimentOrThrowArgs");
const FindManyCommentSentimentArgs_1 = require("./args/FindManyCommentSentimentArgs");
const FindUniqueCommentSentimentArgs_1 = require("./args/FindUniqueCommentSentimentArgs");
const FindUniqueCommentSentimentOrThrowArgs_1 = require("./args/FindUniqueCommentSentimentOrThrowArgs");
const GroupByCommentSentimentArgs_1 = require("./args/GroupByCommentSentimentArgs");
const UpdateManyCommentSentimentArgs_1 = require("./args/UpdateManyCommentSentimentArgs");
const UpdateOneCommentSentimentArgs_1 = require("./args/UpdateOneCommentSentimentArgs");
const UpsertOneCommentSentimentArgs_1 = require("./args/UpsertOneCommentSentimentArgs");
const helpers_1 = require("../../../helpers");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCommentSentiment_1 = require("../../outputs/AggregateCommentSentiment");
const CommentSentimentGroupBy_1 = require("../../outputs/CommentSentimentGroupBy");
let CommentSentimentCrudResolver = class CommentSentimentCrudResolver {
    async aggregateCommentSentiment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCommentSentimentOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async commentSentiments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async commentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCommentSentiment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CommentSentimentCrudResolver = CommentSentimentCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCommentSentiment_1.AggregateCommentSentiment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCommentSentimentArgs_1.AggregateCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "aggregateCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCommentSentimentArgs_1.CreateManyCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "createManyCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCommentSentimentArgs_1.CreateOneCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "createOneCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCommentSentimentArgs_1.DeleteManyCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "deleteManyCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCommentSentimentArgs_1.DeleteOneCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "deleteOneCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentSentimentArgs_1.FindFirstCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "findFirstCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentSentimentOrThrowArgs_1.FindFirstCommentSentimentOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "findFirstCommentSentimentOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CommentSentiment_1.CommentSentiment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCommentSentimentArgs_1.FindManyCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "commentSentiments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentSentimentArgs_1.FindUniqueCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "commentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentSentimentOrThrowArgs_1.FindUniqueCommentSentimentOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "getCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CommentSentimentGroupBy_1.CommentSentimentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCommentSentimentArgs_1.GroupByCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "groupByCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCommentSentimentArgs_1.UpdateManyCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "updateManyCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCommentSentimentArgs_1.UpdateOneCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "updateOneCommentSentiment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCommentSentimentArgs_1.UpsertOneCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentSentimentCrudResolver.prototype, "upsertOneCommentSentiment", null);
exports.CommentSentimentCrudResolver = CommentSentimentCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], CommentSentimentCrudResolver);
