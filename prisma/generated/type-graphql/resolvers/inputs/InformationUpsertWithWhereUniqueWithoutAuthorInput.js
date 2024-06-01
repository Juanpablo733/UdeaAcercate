"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateWithoutAuthorInput_1 = require("../inputs/InformationCreateWithoutAuthorInput");
const InformationUpdateWithoutAuthorInput_1 = require("../inputs/InformationUpdateWithoutAuthorInput");
const InformationWhereUniqueInput_1 = require("../inputs/InformationWhereUniqueInput");
let InformationUpsertWithWhereUniqueWithoutAuthorInput = exports.InformationUpsertWithWhereUniqueWithoutAuthorInput = class InformationUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], InformationUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateWithoutAuthorInput_1.InformationUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateWithoutAuthorInput_1.InformationUpdateWithoutAuthorInput)
], InformationUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutAuthorInput_1.InformationCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutAuthorInput_1.InformationCreateWithoutAuthorInput)
], InformationUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
exports.InformationUpsertWithWhereUniqueWithoutAuthorInput = InformationUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpsertWithWhereUniqueWithoutAuthorInput", {})
], InformationUpsertWithWhereUniqueWithoutAuthorInput);
