"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyAttendeeArgs_1 = require("./args/UpdateManyAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAttendeeResolver = exports.UpdateManyAttendeeResolver = class UpdateManyAttendeeResolver {
    async updateManyAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyAttendeeResolver.prototype, "updateManyAttendee", null);
exports.UpdateManyAttendeeResolver = UpdateManyAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], UpdateManyAttendeeResolver);
