"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportCreateInput_1 = require("../../../inputs/ReportCreateInput");
let CreateOneReportArgs = class CreateOneReportArgs {
};
exports.CreateOneReportArgs = CreateOneReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportCreateInput_1.ReportCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportCreateInput_1.ReportCreateInput)
], CreateOneReportArgs.prototype, "data", void 0);
exports.CreateOneReportArgs = CreateOneReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneReportArgs);
