"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateManyAuthorInputEnvelope_1 = require("../inputs/InformationCreateManyAuthorInputEnvelope");
const InformationCreateOrConnectWithoutAuthorInput_1 = require("../inputs/InformationCreateOrConnectWithoutAuthorInput");
const InformationCreateWithoutAuthorInput_1 = require("../inputs/InformationCreateWithoutAuthorInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationCreateNestedManyWithoutAuthorInput = class InformationCreateNestedManyWithoutAuthorInput {
};
exports.InformationCreateNestedManyWithoutAuthorInput = InformationCreateNestedManyWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationCreateWithoutAuthorInput_1.InformationCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationCreateOrConnectWithoutAuthorInput_1.InformationCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateManyAuthorInputEnvelope_1.InformationCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateManyAuthorInputEnvelope_1.InformationCreateManyAuthorInputEnvelope)
], InformationCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationWhereUniqueInput_1.InformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
exports.InformationCreateNestedManyWithoutAuthorInput = InformationCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateNestedManyWithoutAuthorInput", {})
], InformationCreateNestedManyWithoutAuthorInput);
