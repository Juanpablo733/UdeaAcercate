"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateInput_1 = require("../../../inputs/AttendeeCreateInput");
let CreateOneAttendeeArgs = class CreateOneAttendeeArgs {
};
exports.CreateOneAttendeeArgs = CreateOneAttendeeArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateInput_1.AttendeeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeCreateInput_1.AttendeeCreateInput)
], CreateOneAttendeeArgs.prototype, "data", void 0);
exports.CreateOneAttendeeArgs = CreateOneAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAttendeeArgs);
