"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AttendeeScalarFieldEnum;
(function (AttendeeScalarFieldEnum) {
    AttendeeScalarFieldEnum["userId"] = "userId";
    AttendeeScalarFieldEnum["eventId"] = "eventId";
})(AttendeeScalarFieldEnum || (exports.AttendeeScalarFieldEnum = AttendeeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AttendeeScalarFieldEnum, {
    name: "AttendeeScalarFieldEnum",
    description: undefined,
});
