"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenOrderByWithRelationInput_1 = require("../../../inputs/EmailTokenOrderByWithRelationInput");
const EmailTokenWhereInput_1 = require("../../../inputs/EmailTokenWhereInput");
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
const EmailTokenScalarFieldEnum_1 = require("../../../../enums/EmailTokenScalarFieldEnum");
let FindManyEmailTokenArgs = class FindManyEmailTokenArgs {
};
exports.FindManyEmailTokenArgs = FindManyEmailTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereInput_1.EmailTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereInput_1.EmailTokenWhereInput)
], FindManyEmailTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenOrderByWithRelationInput_1.EmailTokenOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEmailTokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], FindManyEmailTokenArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEmailTokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEmailTokenArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailTokenScalarFieldEnum_1.EmailTokenScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEmailTokenArgs.prototype, "distinct", void 0);
exports.FindManyEmailTokenArgs = FindManyEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyEmailTokenArgs);
