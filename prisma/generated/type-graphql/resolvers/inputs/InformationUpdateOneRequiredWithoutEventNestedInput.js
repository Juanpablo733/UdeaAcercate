"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateOneRequiredWithoutEventNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateOrConnectWithoutEventInput_1 = require("../inputs/InformationCreateOrConnectWithoutEventInput");
const InformationCreateWithoutEventInput_1 = require("../inputs/InformationCreateWithoutEventInput");
const InformationUpdateToOneWithWhereWithoutEventInput_1 = require("../inputs/InformationUpdateToOneWithWhereWithoutEventInput");
const InformationUpsertWithoutEventInput_1 = require("../inputs/InformationUpsertWithoutEventInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationUpdateOneRequiredWithoutEventNestedInput = exports.InformationUpdateOneRequiredWithoutEventNestedInput = class InformationUpdateOneRequiredWithoutEventNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput)
], InformationUpdateOneRequiredWithoutEventNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateOrConnectWithoutEventInput_1.InformationCreateOrConnectWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateOrConnectWithoutEventInput_1.InformationCreateOrConnectWithoutEventInput)
], InformationUpdateOneRequiredWithoutEventNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpsertWithoutEventInput_1.InformationUpsertWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpsertWithoutEventInput_1.InformationUpsertWithoutEventInput)
], InformationUpdateOneRequiredWithoutEventNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationUpdateOneRequiredWithoutEventNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateToOneWithWhereWithoutEventInput_1.InformationUpdateToOneWithWhereWithoutEventInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateToOneWithWhereWithoutEventInput_1.InformationUpdateToOneWithWhereWithoutEventInput)
], InformationUpdateOneRequiredWithoutEventNestedInput.prototype, "update", void 0);
exports.InformationUpdateOneRequiredWithoutEventNestedInput = InformationUpdateOneRequiredWithoutEventNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateOneRequiredWithoutEventNestedInput", {})
], InformationUpdateOneRequiredWithoutEventNestedInput);
