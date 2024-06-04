"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportUpdateManyMutationInput_1 = require("../../../inputs/ReportUpdateManyMutationInput");
const ReportWhereInput_1 = require("../../../inputs/ReportWhereInput");
let UpdateManyReportArgs = class UpdateManyReportArgs {
};
exports.UpdateManyReportArgs = UpdateManyReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportUpdateManyMutationInput_1.ReportUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportUpdateManyMutationInput_1.ReportUpdateManyMutationInput)
], UpdateManyReportArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportWhereInput_1.ReportWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportWhereInput_1.ReportWhereInput)
], UpdateManyReportArgs.prototype, "where", void 0);
exports.UpdateManyReportArgs = UpdateManyReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReportArgs);
