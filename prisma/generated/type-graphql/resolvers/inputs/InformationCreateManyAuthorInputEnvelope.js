"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateManyAuthorInput_1 = require("../inputs/InformationCreateManyAuthorInput");
let InformationCreateManyAuthorInputEnvelope = exports.InformationCreateManyAuthorInputEnvelope = class InformationCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationCreateManyAuthorInput_1.InformationCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InformationCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InformationCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
exports.InformationCreateManyAuthorInputEnvelope = InformationCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreateManyAuthorInputEnvelope", {})
], InformationCreateManyAuthorInputEnvelope);
