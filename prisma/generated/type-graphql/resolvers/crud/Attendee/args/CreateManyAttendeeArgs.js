"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAttendeeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateManyInput_1 = require("../../../inputs/AttendeeCreateManyInput");
let CreateManyAttendeeArgs = exports.CreateManyAttendeeArgs = class CreateManyAttendeeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeCreateManyInput_1.AttendeeCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAttendeeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAttendeeArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAttendeeArgs = CreateManyAttendeeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAttendeeArgs);
