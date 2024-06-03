"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpsertWithoutEventInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateWithoutEventInput_1 = require("../inputs/InformationCreateWithoutEventInput");
const InformationUpdateWithoutEventInput_1 = require("../inputs/InformationUpdateWithoutEventInput");
const InformationWhereInput_1 = require("../inputs/InformationWhereInput");
let InformationUpsertWithoutEventInput = class InformationUpsertWithoutEventInput {
};
exports.InformationUpsertWithoutEventInput = InformationUpsertWithoutEventInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateWithoutEventInput_1.InformationUpdateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateWithoutEventInput_1.InformationUpdateWithoutEventInput)
], InformationUpsertWithoutEventInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutEventInput_1.InformationCreateWithoutEventInput)
], InformationUpsertWithoutEventInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationUpsertWithoutEventInput.prototype, "where", void 0);
exports.InformationUpsertWithoutEventInput = InformationUpsertWithoutEventInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpsertWithoutEventInput", {})
], InformationUpsertWithoutEventInput);
