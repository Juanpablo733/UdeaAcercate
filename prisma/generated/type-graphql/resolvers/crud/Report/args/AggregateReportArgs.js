"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportOrderByWithRelationInput_1 = require("../../../inputs/ReportOrderByWithRelationInput");
const ReportWhereInput_1 = require("../../../inputs/ReportWhereInput");
const ReportWhereUniqueInput_1 = require("../../../inputs/ReportWhereUniqueInput");
let AggregateReportArgs = class AggregateReportArgs {
};
exports.AggregateReportArgs = AggregateReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereInput_1.ReportWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportWhereInput_1.ReportWhereInput)
], AggregateReportArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportOrderByWithRelationInput_1.ReportOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateReportArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereUniqueInput_1.ReportWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportWhereUniqueInput_1.ReportWhereUniqueInput)
], AggregateReportArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReportArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReportArgs.prototype, "skip", void 0);
exports.AggregateReportArgs = AggregateReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateReportArgs);
