"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateToOneWithWhereWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationUpdateWithoutEventInput_1 = require("../inputs/InformationUpdateWithoutEventInput");
const InformationWhereInput_1 = require("../inputs/InformationWhereInput");
let InformationUpdateToOneWithWhereWithoutEventInput = class InformationUpdateToOneWithWhereWithoutEventInput {
};
exports.InformationUpdateToOneWithWhereWithoutEventInput = InformationUpdateToOneWithWhereWithoutEventInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationUpdateToOneWithWhereWithoutEventInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateWithoutEventInput_1.InformationUpdateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateWithoutEventInput_1.InformationUpdateWithoutEventInput)
], InformationUpdateToOneWithWhereWithoutEventInput.prototype, "data", void 0);
exports.InformationUpdateToOneWithWhereWithoutEventInput = InformationUpdateToOneWithWhereWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateToOneWithWhereWithoutEventInput", {})
], InformationUpdateToOneWithWhereWithoutEventInput);
