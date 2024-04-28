"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationWhereInput_1 = require("../inputs/InformationWhereInput");
let InformationRelationFilter = exports.InformationRelationFilter = class InformationRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationRelationFilter.prototype, "isNot", void 0);
exports.InformationRelationFilter = InformationRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationRelationFilter", {})
], InformationRelationFilter);
