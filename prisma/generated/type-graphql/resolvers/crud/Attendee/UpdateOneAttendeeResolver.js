"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneAttendeeArgs_1 = require("./args/UpdateOneAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let UpdateOneAttendeeResolver = class UpdateOneAttendeeResolver {
    async updateOneAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneAttendeeResolver = UpdateOneAttendeeResolver;
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
], UpdateOneAttendeeResolver.prototype, "updateOneAttendee", null);
exports.UpdateOneAttendeeResolver = UpdateOneAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], UpdateOneAttendeeResolver);
