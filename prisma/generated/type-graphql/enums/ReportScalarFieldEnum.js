"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReportScalarFieldEnum;
(function (ReportScalarFieldEnum) {
    ReportScalarFieldEnum["userId"] = "userId";
    ReportScalarFieldEnum["eventId"] = "eventId";
    ReportScalarFieldEnum["reason"] = "reason";
    ReportScalarFieldEnum["dateTime"] = "dateTime";
})(ReportScalarFieldEnum || (exports.ReportScalarFieldEnum = ReportScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReportScalarFieldEnum, {
    name: "ReportScalarFieldEnum",
    description: undefined,
});
