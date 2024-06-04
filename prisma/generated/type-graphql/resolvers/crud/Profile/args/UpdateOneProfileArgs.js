"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileUpdateInput_1 = require("../../../inputs/ProfileUpdateInput");
const ProfileWhereUniqueInput_1 = require("../../../inputs/ProfileWhereUniqueInput");
let UpdateOneProfileArgs = class UpdateOneProfileArgs {
};
exports.UpdateOneProfileArgs = UpdateOneProfileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateInput_1.ProfileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateInput_1.ProfileUpdateInput)
], UpdateOneProfileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], UpdateOneProfileArgs.prototype, "where", void 0);
exports.UpdateOneProfileArgs = UpdateOneProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProfileArgs);
