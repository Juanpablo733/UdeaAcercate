"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileOrderByWithRelationInput_1 = require("../../../inputs/ProfileOrderByWithRelationInput");
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
const ProfileWhereUniqueInput_1 = require("../../../inputs/ProfileWhereUniqueInput");
let AggregateProfileArgs = exports.AggregateProfileArgs = class AggregateProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], AggregateProfileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileOrderByWithRelationInput_1.ProfileOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateProfileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], AggregateProfileArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProfileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProfileArgs.prototype, "skip", void 0);
exports.AggregateProfileArgs = AggregateProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateProfileArgs);
