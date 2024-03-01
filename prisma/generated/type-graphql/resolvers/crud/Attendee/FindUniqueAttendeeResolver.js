"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAttendeeArgs_1 = require("./args/FindUniqueAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const helpers_1 = require("../../../helpers");
let FindUniqueAttendeeResolver = exports.FindUniqueAttendeeResolver = class FindUniqueAttendeeResolver {
    async attendee(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAttendeeArgs_1.FindUniqueAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAttendeeResolver.prototype, "attendee", null);
exports.FindUniqueAttendeeResolver = FindUniqueAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], FindUniqueAttendeeResolver);
