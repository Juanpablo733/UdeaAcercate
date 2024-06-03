"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneAttendeeArgs_1 = require("./args/DeleteOneAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let DeleteOneAttendeeResolver = class DeleteOneAttendeeResolver {
    async deleteOneAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneAttendeeResolver = DeleteOneAttendeeResolver;
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
], DeleteOneAttendeeResolver.prototype, "deleteOneAttendee", null);
exports.DeleteOneAttendeeResolver = DeleteOneAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], DeleteOneAttendeeResolver);
