"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAttendeeArgs_1 = require("./args/CreateManyAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyAttendeeResolver = class CreateManyAttendeeResolver {
    async createManyAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAttendeeResolver = CreateManyAttendeeResolver;
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
], CreateManyAttendeeResolver.prototype, "createManyAttendee", null);
exports.CreateManyAttendeeResolver = CreateManyAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], CreateManyAttendeeResolver);
