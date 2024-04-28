"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstInformationArgs_1 = require("./args/FindFirstInformationArgs");
const Information_1 = require("../../../models/Information");
const helpers_1 = require("../../../helpers");
let FindFirstInformationResolver = exports.FindFirstInformationResolver = class FindFirstInformationResolver {
    async findFirstInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Information_1.Information, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInformationArgs_1.FindFirstInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInformationResolver.prototype, "findFirstInformation", null);
exports.FindFirstInformationResolver = FindFirstInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], FindFirstInformationResolver);
