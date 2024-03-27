"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventWhereInput_1 = require("../../../inputs/EventWhereInput");
let InformationEventArgs = exports.InformationEventArgs = class InformationEventArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], InformationEventArgs.prototype, "where", void 0);
exports.InformationEventArgs = InformationEventArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], InformationEventArgs);
