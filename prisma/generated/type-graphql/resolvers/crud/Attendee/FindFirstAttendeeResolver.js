"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAttendeeArgs_1 = require("./args/FindFirstAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let FindFirstAttendeeResolver = class FindFirstAttendeeResolver {
    async findFirstAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstAttendeeResolver = FindFirstAttendeeResolver;
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
], FindFirstAttendeeResolver.prototype, "findFirstAttendee", null);
exports.FindFirstAttendeeResolver = FindFirstAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], FindFirstAttendeeResolver);
