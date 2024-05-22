"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateOneRequiredWithoutCommentsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateOrConnectWithoutCommentsInput_1 = require("../inputs/InformationCreateOrConnectWithoutCommentsInput");
const InformationCreateWithoutCommentsInput_1 = require("../inputs/InformationCreateWithoutCommentsInput");
const InformationUpdateToOneWithWhereWithoutCommentsInput_1 = require("../inputs/InformationUpdateToOneWithWhereWithoutCommentsInput");
const InformationUpsertWithoutCommentsInput_1 = require("../inputs/InformationUpsertWithoutCommentsInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationUpdateOneRequiredWithoutCommentsNestedInput = exports.InformationUpdateOneRequiredWithoutCommentsNestedInput = class InformationUpdateOneRequiredWithoutCommentsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput)
], InformationUpdateOneRequiredWithoutCommentsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateOrConnectWithoutCommentsInput_1.InformationCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationCreateOrConnectWithoutCommentsInput_1.InformationCreateOrConnectWithoutCommentsInput)
], InformationUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpsertWithoutCommentsInput_1.InformationUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpsertWithoutCommentsInput_1.InformationUpsertWithoutCommentsInput)
], InformationUpdateOneRequiredWithoutCommentsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateToOneWithWhereWithoutCommentsInput_1.InformationUpdateToOneWithWhereWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateToOneWithWhereWithoutCommentsInput_1.InformationUpdateToOneWithWhereWithoutCommentsInput)
], InformationUpdateOneRequiredWithoutCommentsNestedInput.prototype, "update", void 0);
exports.InformationUpdateOneRequiredWithoutCommentsNestedInput = InformationUpdateOneRequiredWithoutCommentsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateOneRequiredWithoutCommentsNestedInput", {})
], InformationUpdateOneRequiredWithoutCommentsNestedInput);
