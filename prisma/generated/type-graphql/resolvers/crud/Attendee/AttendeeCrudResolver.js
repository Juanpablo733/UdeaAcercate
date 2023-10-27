"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAttendeeArgs_1 = require("./args/AggregateAttendeeArgs");
const CreateManyAttendeeArgs_1 = require("./args/CreateManyAttendeeArgs");
const CreateOneAttendeeArgs_1 = require("./args/CreateOneAttendeeArgs");
const DeleteManyAttendeeArgs_1 = require("./args/DeleteManyAttendeeArgs");
const DeleteOneAttendeeArgs_1 = require("./args/DeleteOneAttendeeArgs");
const FindFirstAttendeeArgs_1 = require("./args/FindFirstAttendeeArgs");
const FindFirstAttendeeOrThrowArgs_1 = require("./args/FindFirstAttendeeOrThrowArgs");
const FindManyAttendeeArgs_1 = require("./args/FindManyAttendeeArgs");
const FindUniqueAttendeeArgs_1 = require("./args/FindUniqueAttendeeArgs");
const FindUniqueAttendeeOrThrowArgs_1 = require("./args/FindUniqueAttendeeOrThrowArgs");
const GroupByAttendeeArgs_1 = require("./args/GroupByAttendeeArgs");
const UpdateManyAttendeeArgs_1 = require("./args/UpdateManyAttendeeArgs");
const UpdateOneAttendeeArgs_1 = require("./args/UpdateOneAttendeeArgs");
const UpsertOneAttendeeArgs_1 = require("./args/UpsertOneAttendeeArgs");
const helpers_1 = require("../../../helpers");
const Attendee_1 = require("../../../models/Attendee");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAttendee_1 = require("../../outputs/AggregateAttendee");
const AttendeeGroupBy_1 = require("../../outputs/AttendeeGroupBy");
let AttendeeCrudResolver = exports.AttendeeCrudResolver = class AttendeeCrudResolver {
    async aggregateAttendee(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAttendeeOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async attendees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async attendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAttendee(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAttendee_1.AggregateAttendee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAttendeeArgs_1.AggregateAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "aggregateAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAttendeeArgs_1.CreateManyAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "createManyAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attendee_1.Attendee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAttendeeArgs_1.CreateOneAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "createOneAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAttendeeArgs_1.DeleteManyAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "deleteManyAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attendee_1.Attendee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAttendeeArgs_1.DeleteOneAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "deleteOneAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attendee_1.Attendee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAttendeeArgs_1.FindFirstAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "findFirstAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attendee_1.Attendee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAttendeeOrThrowArgs_1.FindFirstAttendeeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "findFirstAttendeeOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Attendee_1.Attendee], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAttendeeArgs_1.FindManyAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "attendees", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attendee_1.Attendee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAttendeeArgs_1.FindUniqueAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "attendee", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attendee_1.Attendee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAttendeeOrThrowArgs_1.FindUniqueAttendeeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "getAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AttendeeGroupBy_1.AttendeeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAttendeeArgs_1.GroupByAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "groupByAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAttendeeArgs_1.UpdateManyAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "updateManyAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attendee_1.Attendee, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAttendeeArgs_1.UpdateOneAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "updateOneAttendee", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attendee_1.Attendee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAttendeeArgs_1.UpsertOneAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeCrudResolver.prototype, "upsertOneAttendee", null);
exports.AttendeeCrudResolver = AttendeeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], AttendeeCrudResolver);
