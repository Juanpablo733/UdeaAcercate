"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeScalarWhereInput_1 = require("../inputs/AttendeeScalarWhereInput");
const AttendeeUpdateManyMutationInput_1 = require("../inputs/AttendeeUpdateManyMutationInput");
let AttendeeUpdateManyWithWhereWithoutUserInput = exports.AttendeeUpdateManyWithWhereWithoutUserInput = class AttendeeUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeScalarWhereInput_1.AttendeeScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeScalarWhereInput_1.AttendeeScalarWhereInput)
], AttendeeUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyMutationInput_1.AttendeeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyMutationInput_1.AttendeeUpdateManyMutationInput)
], AttendeeUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.AttendeeUpdateManyWithWhereWithoutUserInput = AttendeeUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeUpdateManyWithWhereWithoutUserInput", {})
], AttendeeUpdateManyWithWhereWithoutUserInput);
