"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountEventsCreatedArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereInput_1 = require("../../inputs/EventWhereInput");
let UserCountEventsCreatedArgs = exports.UserCountEventsCreatedArgs = class UserCountEventsCreatedArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], UserCountEventsCreatedArgs.prototype, "where", void 0);
exports.UserCountEventsCreatedArgs = UserCountEventsCreatedArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountEventsCreatedArgs);
