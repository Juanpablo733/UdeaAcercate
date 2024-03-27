"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EventScalarFieldEnum;
(function (EventScalarFieldEnum) {
    EventScalarFieldEnum["id"] = "id";
    EventScalarFieldEnum["authorId"] = "authorId";
    EventScalarFieldEnum["infoId"] = "infoId";
    EventScalarFieldEnum["place"] = "place";
})(EventScalarFieldEnum || (exports.EventScalarFieldEnum = EventScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EventScalarFieldEnum, {
    name: "EventScalarFieldEnum",
    description: undefined,
});
