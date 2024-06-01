"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Event_1 = require("../../../models/Event");
const Information_1 = require("../../../models/Information");
const User_1 = require("../../../models/User");
const InformationAuthorArgs_1 = require("./args/InformationAuthorArgs");
const InformationCommentsArgs_1 = require("./args/InformationCommentsArgs");
const InformationEventArgs_1 = require("./args/InformationEventArgs");
const helpers_1 = require("../../../helpers");
let InformationRelationsResolver = exports.InformationRelationsResolver = class InformationRelationsResolver {
    async author(information, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findUniqueOrThrow({
            where: {
                id: information.id,
            },
        }).author({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async comments(information, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findUniqueOrThrow({
            where: {
                id: information.id,
            },
        }).comments({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async event(information, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findUniqueOrThrow({
            where: {
                id: information.id,
            },
        }).event({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Information_1.Information, Object, Object, InformationAuthorArgs_1.InformationAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Information_1.Information, Object, Object, InformationCommentsArgs_1.InformationCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationRelationsResolver.prototype, "comments", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Event_1.Event, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Information_1.Information, Object, Object, InformationEventArgs_1.InformationEventArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InformationRelationsResolver.prototype, "event", null);
exports.InformationRelationsResolver = InformationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], InformationRelationsResolver);
