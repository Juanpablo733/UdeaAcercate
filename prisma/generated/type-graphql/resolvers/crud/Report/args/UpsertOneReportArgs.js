"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportCreateInput_1 = require("../../../inputs/ReportCreateInput");
const ReportUpdateInput_1 = require("../../../inputs/ReportUpdateInput");
const ReportWhereUniqueInput_1 = require("../../../inputs/ReportWhereUniqueInput");
let UpsertOneReportArgs = class UpsertOneReportArgs {
};
exports.UpsertOneReportArgs = UpsertOneReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereUniqueInput_1.ReportWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportWhereUniqueInput_1.ReportWhereUniqueInput)
], UpsertOneReportArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportCreateInput_1.ReportCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportCreateInput_1.ReportCreateInput)
], UpsertOneReportArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportUpdateInput_1.ReportUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportUpdateInput_1.ReportUpdateInput)
], UpsertOneReportArgs.prototype, "update", void 0);
exports.UpsertOneReportArgs = UpsertOneReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneReportArgs);
