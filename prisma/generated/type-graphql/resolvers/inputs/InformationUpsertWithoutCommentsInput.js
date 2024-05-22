"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpsertWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateWithoutCommentsInput_1 = require("../inputs/InformationCreateWithoutCommentsInput");
const InformationUpdateWithoutCommentsInput_1 = require("../inputs/InformationUpdateWithoutCommentsInput");
const InformationWhereInput_1 = require("../inputs/InformationWhereInput");
let InformationUpsertWithoutCommentsInput = exports.InformationUpsertWithoutCommentsInput = class InformationUpsertWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateWithoutCommentsInput_1.InformationUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateWithoutCommentsInput_1.InformationUpdateWithoutCommentsInput)
], InformationUpsertWithoutCommentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateWithoutCommentsInput_1.InformationCreateWithoutCommentsInput)
], InformationUpsertWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], InformationUpsertWithoutCommentsInput.prototype, "where", void 0);
exports.InformationUpsertWithoutCommentsInput = InformationUpsertWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpsertWithoutCommentsInput", {})
], InformationUpsertWithoutCommentsInput);
