"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationUpdateWithoutAuthorInput_1 = require("../inputs/InformationUpdateWithoutAuthorInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationUpdateWithWhereUniqueWithoutAuthorInput = exports.InformationUpdateWithWhereUniqueWithoutAuthorInput = class InformationUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateWithoutAuthorInput_1.InformationUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateWithoutAuthorInput_1.InformationUpdateWithoutAuthorInput)
], InformationUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
exports.InformationUpdateWithWhereUniqueWithoutAuthorInput = InformationUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateWithWhereUniqueWithoutAuthorInput", {})
], InformationUpdateWithWhereUniqueWithoutAuthorInput);
