"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileWhereInput_1 = require("../../../inputs/ProfileWhereInput");
let DeleteManyProfileArgs = exports.DeleteManyProfileArgs = class DeleteManyProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], DeleteManyProfileArgs.prototype, "where", void 0);
exports.DeleteManyProfileArgs = DeleteManyProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProfileArgs);
