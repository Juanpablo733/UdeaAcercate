"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportUpdateInput_1 = require("../../../inputs/ReportUpdateInput");
const ReportWhereUniqueInput_1 = require("../../../inputs/ReportWhereUniqueInput");
let UpdateOneReportArgs = class UpdateOneReportArgs {
};
exports.UpdateOneReportArgs = UpdateOneReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportUpdateInput_1.ReportUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportUpdateInput_1.ReportUpdateInput)
], UpdateOneReportArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereUniqueInput_1.ReportWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportWhereUniqueInput_1.ReportWhereUniqueInput)
], UpdateOneReportArgs.prototype, "where", void 0);
exports.UpdateOneReportArgs = UpdateOneReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneReportArgs);
