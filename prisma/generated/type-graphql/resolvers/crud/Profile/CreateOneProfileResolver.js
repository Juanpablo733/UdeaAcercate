"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneProfileArgs_1 = require("./args/CreateOneProfileArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let CreateOneProfileResolver = class CreateOneProfileResolver {
    async createOneProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneProfileResolver = CreateOneProfileResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProfileArgs_1.CreateOneProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneProfileResolver.prototype, "createOneProfile", null);
exports.CreateOneProfileResolver = CreateOneProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], CreateOneProfileResolver);
