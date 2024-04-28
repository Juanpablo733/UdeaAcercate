"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumCampusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Campus_1 = require("../../enums/Campus");
let NullableEnumCampusFieldUpdateOperationsInput = exports.NullableEnumCampusFieldUpdateOperationsInput = class NullableEnumCampusFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumCampusFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumCampusFieldUpdateOperationsInput = NullableEnumCampusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumCampusFieldUpdateOperationsInput", {})
], NullableEnumCampusFieldUpdateOperationsInput);
