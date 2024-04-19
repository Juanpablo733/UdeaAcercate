"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInformationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstInformationOrThrowArgs_1 = require("./args/FindFirstInformationOrThrowArgs");
const Information_1 = require("../../../models/Information");
const helpers_1 = require("../../../helpers");
let FindFirstInformationOrThrowResolver = exports.FindFirstInformationOrThrowResolver = class FindFirstInformationOrThrowResolver {
    async findFirstInformationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInformationOrThrowArgs_1.FindFirstInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInformationOrThrowResolver.prototype, "findFirstInformationOrThrow", null);
exports.FindFirstInformationOrThrowResolver = FindFirstInformationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], FindFirstInformationOrThrowResolver);
