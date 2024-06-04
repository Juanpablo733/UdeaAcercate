"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCountAttendeesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeWhereInput_1 = require("../../inputs/AttendeeWhereInput");
let EventCountAttendeesArgs = class EventCountAttendeesArgs {
};
exports.EventCountAttendeesArgs = EventCountAttendeesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], EventCountAttendeesArgs.prototype, "where", void 0);
exports.EventCountAttendeesArgs = EventCountAttendeesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], EventCountAttendeesArgs);
