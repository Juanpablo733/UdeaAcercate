"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInformationArgs_1 = require("./args/AggregateInformationArgs");
const Information_1 = require("../../../models/Information");
const AggregateInformation_1 = require("../../outputs/AggregateInformation");
const helpers_1 = require("../../../helpers");
let AggregateInformationResolver = class AggregateInformationResolver {
    async aggregateInformation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).information.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateInformationResolver = AggregateInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInformation_1.AggregateInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInformationArgs_1.AggregateInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateInformationResolver.prototype, "aggregateInformation", null);
exports.AggregateInformationResolver = AggregateInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Information_1.Information)
], AggregateInformationResolver);
