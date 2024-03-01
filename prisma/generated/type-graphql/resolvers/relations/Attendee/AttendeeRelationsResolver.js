"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Attendee_1 = require("../../../models/Attendee");
const Event_1 = require("../../../models/Event");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let AttendeeRelationsResolver = exports.AttendeeRelationsResolver = class AttendeeRelationsResolver {
    async user(attendee, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findUniqueOrThrow({
            where: {
                userId_eventId: {
                    userId: attendee.userId,
                    eventId: attendee.eventId,
                },
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async event(attendee, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.findUniqueOrThrow({
            where: {
                userId_eventId: {
                    userId: attendee.userId,
                    eventId: attendee.eventId,
                },
            },
        }).event({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Attendee_1.Attendee, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Event_1.Event, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Attendee_1.Attendee, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AttendeeRelationsResolver.prototype, "event", null);
exports.AttendeeRelationsResolver = AttendeeRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], AttendeeRelationsResolver);
