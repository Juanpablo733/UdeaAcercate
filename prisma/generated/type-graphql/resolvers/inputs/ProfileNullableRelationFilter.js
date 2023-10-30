"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileWhereInput_1 = require("../inputs/ProfileWhereInput");
let ProfileNullableRelationFilter = exports.ProfileNullableRelationFilter = class ProfileNullableRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileNullableRelationFilter.prototype, "isNot", void 0);
exports.ProfileNullableRelationFilter = ProfileNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileNullableRelationFilter", {})
], ProfileNullableRelationFilter);
