"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProfileOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileOrderByWithRelationInput_1 = require("../../../inputs/ProfileOrderByWithRelationInput");
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
const ProfileWhereUniqueInput_1 = require("../../../inputs/ProfileWhereUniqueInput");
const ProfileScalarFieldEnum_1 = require("../../../../enums/ProfileScalarFieldEnum");
let FindFirstProfileOrThrowArgs = exports.FindFirstProfileOrThrowArgs = class FindFirstProfileOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], FindFirstProfileOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProfileOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], FindFirstProfileOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProfileOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProfileOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileScalarFieldEnum_1.ProfileScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProfileOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstProfileOrThrowArgs = FindFirstProfileOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstProfileOrThrowArgs);
