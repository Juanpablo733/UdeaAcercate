"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneInformationArgs_1 = require("./args/UpsertOneInformationArgs");
const Information_1 = require("../../../models/Information");
const helpers_1 = require("../../../helpers");
let UpsertOneInformationResolver = exports.UpsertOneInformationResolver = class UpsertOneInformationResolver {
    async upsertOneInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).information.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Information_1.Information, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInformationArgs_1.UpsertOneInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneInformationResolver.prototype, "upsertOneInformation", null);
exports.UpsertOneInformationResolver = UpsertOneInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], UpsertOneInformationResolver);
