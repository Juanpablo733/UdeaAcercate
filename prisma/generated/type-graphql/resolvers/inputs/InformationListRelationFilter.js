"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationWhereInput_1 = require("../inputs/InformationWhereInput");
let InformationListRelationFilter = exports.InformationListRelationFilter = class InformationListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationListRelationFilter.prototype, "none", void 0);
exports.InformationListRelationFilter = InformationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationListRelationFilter", {})
], InformationListRelationFilter);
