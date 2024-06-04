"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAttendeeArgs_1 = require("./args/GroupByAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const AttendeeGroupBy_1 = require("../../outputs/AttendeeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAttendeeResolver = class GroupByAttendeeResolver {
    async groupByAttendee(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByAttendeeResolver = GroupByAttendeeResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AttendeeGroupBy_1.AttendeeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAttendeeArgs_1.GroupByAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAttendeeResolver.prototype, "groupByAttendee", null);
exports.GroupByAttendeeResolver = GroupByAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], GroupByAttendeeResolver);
