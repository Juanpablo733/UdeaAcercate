"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmailTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByEmailTokenArgs_1 = require("./args/GroupByEmailTokenArgs");
const EmailToken_1 = require("../../../models/EmailToken");
const EmailTokenGroupBy_1 = require("../../outputs/EmailTokenGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEmailTokenResolver = class GroupByEmailTokenResolver {
    async groupByEmailToken(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emailToken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByEmailTokenResolver = GroupByEmailTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EmailTokenGroupBy_1.EmailTokenGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEmailTokenArgs_1.GroupByEmailTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByEmailTokenResolver.prototype, "groupByEmailToken", null);
exports.GroupByEmailTokenResolver = GroupByEmailTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => EmailToken_1.EmailToken)
], GroupByEmailTokenResolver);
