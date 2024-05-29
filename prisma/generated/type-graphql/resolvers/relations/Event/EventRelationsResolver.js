"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Attendee_1 = require("../../../models/Attendee");
const Event_1 = require("../../../models/Event");
const Information_1 = require("../../../models/Information");
const User_1 = require("../../../models/User");
const EventAttendeesArgs_1 = require("./args/EventAttendeesArgs");
const helpers_1 = require("../../../helpers");
let EventRelationsResolver = exports.EventRelationsResolver = class EventRelationsResolver {
    async author(event, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).event.findUniqueOrThrow({
            where: {
                id: event.id,
            },
        }).author({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async info(event, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).event.findUniqueOrThrow({
            where: {
                id: event.id,
            },
        }).info({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async attendees(event, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).event.findUniqueOrThrow({
            where: {
                id: event.id,
            },
        }).attendees({
            ...args,
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
    tslib_1.__metadata("design:paramtypes", [Event_1.Event, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Information_1.Information, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Event_1.Event, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventRelationsResolver.prototype, "info", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Attendee_1.Attendee], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Event_1.Event, Object, Object, EventAttendeesArgs_1.EventAttendeesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventRelationsResolver.prototype, "attendees", null);
exports.EventRelationsResolver = EventRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Event_1.Event)
], EventRelationsResolver);
