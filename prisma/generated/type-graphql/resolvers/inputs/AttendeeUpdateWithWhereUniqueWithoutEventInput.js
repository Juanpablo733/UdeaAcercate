"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateWithWhereUniqueWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateWithoutEventInput_1 = require("../inputs/AttendeeUpdateWithoutEventInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeUpdateWithWhereUniqueWithoutEventInput = exports.AttendeeUpdateWithWhereUniqueWithoutEventInput = class AttendeeUpdateWithWhereUniqueWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], AttendeeUpdateWithWhereUniqueWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateWithoutEventInput_1.AttendeeUpdateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateWithoutEventInput_1.AttendeeUpdateWithoutEventInput)
], AttendeeUpdateWithWhereUniqueWithoutEventInput.prototype, "data", void 0);
exports.AttendeeUpdateWithWhereUniqueWithoutEventInput = AttendeeUpdateWithWhereUniqueWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateWithWhereUniqueWithoutEventInput", {})
], AttendeeUpdateWithWhereUniqueWithoutEventInput);
