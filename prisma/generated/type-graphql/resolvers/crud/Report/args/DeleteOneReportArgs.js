"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportWhereUniqueInput_1 = require("../../../inputs/ReportWhereUniqueInput");
let DeleteOneReportArgs = class DeleteOneReportArgs {
};
exports.DeleteOneReportArgs = DeleteOneReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereUniqueInput_1.ReportWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportWhereUniqueInput_1.ReportWhereUniqueInput)
], DeleteOneReportArgs.prototype, "where", void 0);
exports.DeleteOneReportArgs = DeleteOneReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneReportArgs);
