"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReportArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportCreateManyInput_1 = require("../../../inputs/ReportCreateManyInput");
let CreateManyReportArgs = class CreateManyReportArgs {
};
exports.CreateManyReportArgs = CreateManyReportArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportCreateManyInput_1.ReportCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReportArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReportArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyReportArgs = CreateManyReportArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReportArgs);
