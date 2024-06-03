"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProfileArgs_1 = require("./args/AggregateProfileArgs");
const Profile_1 = require("../../../models/Profile");
const AggregateProfile_1 = require("../../outputs/AggregateProfile");
const helpers_1 = require("../../../helpers");
let AggregateProfileResolver = class AggregateProfileResolver {
    async aggregateProfile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateProfileResolver = AggregateProfileResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProfile_1.AggregateProfile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProfileArgs_1.AggregateProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProfileResolver.prototype, "aggregateProfile", null);
exports.AggregateProfileResolver = AggregateProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], AggregateProfileResolver);
