"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReportAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyReportAndReturnOutputType = class CreateManyReportAndReturnOutputType {
};
exports.CreateManyReportAndReturnOutputType = CreateManyReportAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyReportAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyReportAndReturnOutputType.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyReportAndReturnOutputType.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyReportAndReturnOutputType.prototype, "dateTime", void 0);
exports.CreateManyReportAndReturnOutputType = CreateManyReportAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyReportAndReturnOutputType", {})
], CreateManyReportAndReturnOutputType);
