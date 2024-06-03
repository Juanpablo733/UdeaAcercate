"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportWhereInput_1 = require("../../../inputs/ReportWhereInput");
let DeleteManyReportArgs = class DeleteManyReportArgs {
};
exports.DeleteManyReportArgs = DeleteManyReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereInput_1.ReportWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportWhereInput_1.ReportWhereInput)
], DeleteManyReportArgs.prototype, "where", void 0);
exports.DeleteManyReportArgs = DeleteManyReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReportArgs);
