"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyAttendeeArgs_1 = require("./args/FindManyAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let FindManyAttendeeResolver = class FindManyAttendeeResolver {
    async attendees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyAttendeeResolver = FindManyAttendeeResolver;
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
], FindManyAttendeeResolver.prototype, "attendees", null);
exports.FindManyAttendeeResolver = FindManyAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], FindManyAttendeeResolver);
