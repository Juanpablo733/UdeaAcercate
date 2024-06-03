"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateInput_1 = require("../../../inputs/ProfileCreateInput");
const ProfileUpdateInput_1 = require("../../../inputs/ProfileUpdateInput");
const ProfileWhereUniqueInput_1 = require("../../../inputs/ProfileWhereUniqueInput");
let UpsertOneProfileArgs = class UpsertOneProfileArgs {
};
exports.UpsertOneProfileArgs = UpsertOneProfileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], UpsertOneProfileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateInput_1.ProfileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileCreateInput_1.ProfileCreateInput)
], UpsertOneProfileArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateInput_1.ProfileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateInput_1.ProfileUpdateInput)
], UpsertOneProfileArgs.prototype, "update", void 0);
exports.UpsertOneProfileArgs = UpsertOneProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProfileArgs);
