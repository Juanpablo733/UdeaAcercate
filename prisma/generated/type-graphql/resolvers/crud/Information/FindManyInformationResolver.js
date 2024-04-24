"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyInformationArgs_1 = require("./args/FindManyInformationArgs");
const Information_1 = require("../../../models/Information");
const helpers_1 = require("../../../helpers");
let FindManyInformationResolver = exports.FindManyInformationResolver = class FindManyInformationResolver {
    async findManyInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Information_1.Information], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInformationArgs_1.FindManyInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyInformationResolver.prototype, "findManyInformation", null);
exports.FindManyInformationResolver = FindManyInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], FindManyInformationResolver);
