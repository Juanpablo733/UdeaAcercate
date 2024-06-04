"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileUpdateManyMutationInput_1 = require("../../../inputs/ProfileUpdateManyMutationInput");
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
let UpdateManyProfileArgs = class UpdateManyProfileArgs {
};
exports.UpdateManyProfileArgs = UpdateManyProfileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateManyMutationInput_1.ProfileUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateManyMutationInput_1.ProfileUpdateManyMutationInput)
], UpdateManyProfileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], UpdateManyProfileArgs.prototype, "where", void 0);
exports.UpdateManyProfileArgs = UpdateManyProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProfileArgs);
