"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateNestedOneWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateOrConnectWithoutCommentsInput_1 = require("../inputs/InformationCreateOrConnectWithoutCommentsInput");
const InformationCreateWithoutCommentsInput_1 = require("../inputs/InformationCreateWithoutCommentsInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationCreateNestedOneWithoutCommentsInput = class InformationCreateNestedOneWithoutCommentsInput {
};
exports.InformationCreateNestedOneWithoutCommentsInput = InformationCreateNestedOneWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput)
], InformationCreateNestedOneWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateOrConnectWithoutCommentsInput_1.InformationCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateOrConnectWithoutCommentsInput_1.InformationCreateOrConnectWithoutCommentsInput)
], InformationCreateNestedOneWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationCreateNestedOneWithoutCommentsInput.prototype, "connect", void 0);
exports.InformationCreateNestedOneWithoutCommentsInput = InformationCreateNestedOneWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateNestedOneWithoutCommentsInput", {})
], InformationCreateNestedOneWithoutCommentsInput);
