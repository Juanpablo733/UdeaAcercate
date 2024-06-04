"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateToOneWithWhereWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationUpdateWithoutCommentsInput_1 = require("../inputs/InformationUpdateWithoutCommentsInput");
const InformationWhereInput_1 = require("../inputs/InformationWhereInput");
let InformationUpdateToOneWithWhereWithoutCommentsInput = class InformationUpdateToOneWithWhereWithoutCommentsInput {
};
exports.InformationUpdateToOneWithWhereWithoutCommentsInput = InformationUpdateToOneWithWhereWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationUpdateToOneWithWhereWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateWithoutCommentsInput_1.InformationUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateWithoutCommentsInput_1.InformationUpdateWithoutCommentsInput)
], InformationUpdateToOneWithWhereWithoutCommentsInput.prototype, "data", void 0);
exports.InformationUpdateToOneWithWhereWithoutCommentsInput = InformationUpdateToOneWithWhereWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateToOneWithWhereWithoutCommentsInput", {})
], InformationUpdateToOneWithWhereWithoutCommentsInput);
