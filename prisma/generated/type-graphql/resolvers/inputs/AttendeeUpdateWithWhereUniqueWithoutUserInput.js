"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateWithoutUserInput_1 = require("../inputs/AttendeeUpdateWithoutUserInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeUpdateWithWhereUniqueWithoutUserInput = exports.AttendeeUpdateWithWhereUniqueWithoutUserInput = class AttendeeUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], AttendeeUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateWithoutUserInput_1.AttendeeUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateWithoutUserInput_1.AttendeeUpdateWithoutUserInput)
], AttendeeUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.AttendeeUpdateWithWhereUniqueWithoutUserInput = AttendeeUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateWithWhereUniqueWithoutUserInput", {})
], AttendeeUpdateWithWhereUniqueWithoutUserInput);
