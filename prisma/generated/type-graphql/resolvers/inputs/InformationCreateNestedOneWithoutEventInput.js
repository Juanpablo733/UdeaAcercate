"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateNestedOneWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateOrConnectWithoutEventInput_1 = require("../inputs/InformationCreateOrConnectWithoutEventInput");
const InformationCreateWithoutEventInput_1 = require("../inputs/InformationCreateWithoutEventInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationCreateNestedOneWithoutEventInput = exports.InformationCreateNestedOneWithoutEventInput = class InformationCreateNestedOneWithoutEventInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput)
], InformationCreateNestedOneWithoutEventInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateOrConnectWithoutEventInput_1.InformationCreateOrConnectWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateOrConnectWithoutEventInput_1.InformationCreateOrConnectWithoutEventInput)
], InformationCreateNestedOneWithoutEventInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationCreateNestedOneWithoutEventInput.prototype, "connect", void 0);
exports.InformationCreateNestedOneWithoutEventInput = InformationCreateNestedOneWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateNestedOneWithoutEventInput", {})
], InformationCreateNestedOneWithoutEventInput);
