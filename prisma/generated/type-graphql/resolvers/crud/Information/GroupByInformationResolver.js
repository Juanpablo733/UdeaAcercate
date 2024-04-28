"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByInformationArgs_1 = require("./args/GroupByInformationArgs");
const Information_1 = require("../../../models/Information");
const InformationGroupBy_1 = require("../../outputs/InformationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInformationResolver = exports.GroupByInformationResolver = class GroupByInformationResolver {
    async groupByInformation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InformationGroupBy_1.InformationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInformationArgs_1.GroupByInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByInformationResolver.prototype, "groupByInformation", null);
exports.GroupByInformationResolver = GroupByInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], GroupByInformationResolver);
