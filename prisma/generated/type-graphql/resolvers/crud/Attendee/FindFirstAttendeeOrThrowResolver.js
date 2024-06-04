"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAttendeeOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAttendeeOrThrowArgs_1 = require("./args/FindFirstAttendeeOrThrowArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let FindFirstAttendeeOrThrowResolver = class FindFirstAttendeeOrThrowResolver {
    async findFirstAttendeeOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstAttendeeOrThrowResolver = FindFirstAttendeeOrThrowResolver;
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
], FindFirstAttendeeOrThrowResolver.prototype, "findFirstAttendeeOrThrow", null);
exports.FindFirstAttendeeOrThrowResolver = FindFirstAttendeeOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], FindFirstAttendeeOrThrowResolver);
