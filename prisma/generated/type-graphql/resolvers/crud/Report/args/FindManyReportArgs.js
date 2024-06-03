"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportOrderByWithRelationInput_1 = require("../../../inputs/ReportOrderByWithRelationInput");
const ReportWhereInput_1 = require("../../../inputs/ReportWhereInput");
const ReportWhereUniqueInput_1 = require("../../../inputs/ReportWhereUniqueInput");
const ReportScalarFieldEnum_1 = require("../../../../enums/ReportScalarFieldEnum");
let FindManyReportArgs = class FindManyReportArgs {
};
exports.FindManyReportArgs = FindManyReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereInput_1.ReportWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportWhereInput_1.ReportWhereInput)
], FindManyReportArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportOrderByWithRelationInput_1.ReportOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReportArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereUniqueInput_1.ReportWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportWhereUniqueInput_1.ReportWhereUniqueInput)
], FindManyReportArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReportArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReportArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportScalarFieldEnum_1.ReportScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReportArgs.prototype, "distinct", void 0);
exports.FindManyReportArgs = FindManyReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyReportArgs);
