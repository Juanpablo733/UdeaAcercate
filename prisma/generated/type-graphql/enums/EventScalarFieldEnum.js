"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EventScalarFieldEnum;
(function (EventScalarFieldEnum) {
    EventScalarFieldEnum["id"] = "id";
    EventScalarFieldEnum["title"] = "title";
    EventScalarFieldEnum["description"] = "description";
    EventScalarFieldEnum["place"] = "place";
    EventScalarFieldEnum["date"] = "date";
    EventScalarFieldEnum["image"] = "image";
    EventScalarFieldEnum["tag"] = "tag";
    EventScalarFieldEnum["authorId"] = "authorId";
    EventScalarFieldEnum["hashtags"] = "hashtags";
})(EventScalarFieldEnum || (exports.EventScalarFieldEnum = EventScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EventScalarFieldEnum, {
    name: "EventScalarFieldEnum",
    description: undefined,
});
