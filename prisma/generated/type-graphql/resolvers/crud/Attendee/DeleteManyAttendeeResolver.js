"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyAttendeeArgs_1 = require("./args/DeleteManyAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyAttendeeResolver = class DeleteManyAttendeeResolver {
    async deleteManyAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyAttendeeResolver = DeleteManyAttendeeResolver;
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
], DeleteManyAttendeeResolver.prototype, "deleteManyAttendee", null);
exports.DeleteManyAttendeeResolver = DeleteManyAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], DeleteManyAttendeeResolver);
