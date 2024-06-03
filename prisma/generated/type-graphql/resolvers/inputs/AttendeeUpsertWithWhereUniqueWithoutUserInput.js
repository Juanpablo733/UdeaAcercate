"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCreateWithoutUserInput_1 = require("../inputs/AttendeeCreateWithoutUserInput");
const AttendeeUpdateWithoutUserInput_1 = require("../inputs/AttendeeUpdateWithoutUserInput");
const AttendeeWhereUniqueInput_1 = require("../inputs/AttendeeWhereUniqueInput");
let AttendeeUpsertWithWhereUniqueWithoutUserInput = class AttendeeUpsertWithWhereUniqueWithoutUserInput {
};
exports.AttendeeUpsertWithWhereUniqueWithoutUserInput = AttendeeUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeWhereUniqueInput_1.AttendeeWhereUniqueInput)
], AttendeeUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateWithoutUserInput_1.AttendeeUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateWithoutUserInput_1.AttendeeUpdateWithoutUserInput)
], AttendeeUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCreateWithoutUserInput_1.AttendeeCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeCreateWithoutUserInput_1.AttendeeCreateWithoutUserInput)
], AttendeeUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.AttendeeUpsertWithWhereUniqueWithoutUserInput = AttendeeUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpsertWithWhereUniqueWithoutUserInput", {})
], AttendeeUpsertWithWhereUniqueWithoutUserInput);
