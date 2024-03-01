"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttendeeOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAttendeeOrThrowArgs_1 = require("./args/FindUniqueAttendeeOrThrowArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let FindUniqueAttendeeOrThrowResolver = exports.FindUniqueAttendeeOrThrowResolver = class FindUniqueAttendeeOrThrowResolver {
    async getAttendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindUniqueAttendeeOrThrowResolver.prototype, "getAttendee", null);
exports.FindUniqueAttendeeOrThrowResolver = FindUniqueAttendeeOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], FindUniqueAttendeeOrThrowResolver);
