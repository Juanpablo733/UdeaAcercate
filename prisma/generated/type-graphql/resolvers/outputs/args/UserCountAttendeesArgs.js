"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountAttendeesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeWhereInput_1 = require("../../inputs/AttendeeWhereInput");
let UserCountAttendeesArgs = class UserCountAttendeesArgs {
};
exports.UserCountAttendeesArgs = UserCountAttendeesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereInput_1.AttendeeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeWhereInput_1.AttendeeWhereInput)
], UserCountAttendeesArgs.prototype, "where", void 0);
exports.UserCountAttendeesArgs = UserCountAttendeesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountAttendeesArgs);
