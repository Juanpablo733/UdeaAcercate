"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
let UserProfileArgs = exports.UserProfileArgs = class UserProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], UserProfileArgs.prototype, "where", void 0);
exports.UserProfileArgs = UserProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserProfileArgs);
