"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAttendeeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAttendeeArgs_1 = require("./args/AggregateAttendeeArgs");
const Attendee_1 = require("../../../models/Attendee");
const AggregateAttendee_1 = require("../../outputs/AggregateAttendee");
const helpers_1 = require("../../../helpers");
let AggregateAttendeeResolver = exports.AggregateAttendeeResolver = class AggregateAttendeeResolver {
    async aggregateAttendee(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).attendee.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAttendee_1.AggregateAttendee, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAttendeeArgs_1.AggregateAttendeeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAttendeeResolver.prototype, "aggregateAttendee", null);
exports.AggregateAttendeeResolver = AggregateAttendeeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attendee_1.Attendee)
], AggregateAttendeeResolver);
