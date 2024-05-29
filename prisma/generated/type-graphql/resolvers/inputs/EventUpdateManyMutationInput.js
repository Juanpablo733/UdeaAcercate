"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let EventUpdateManyMutationInput = exports.EventUpdateManyMutationInput = class EventUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateManyMutationInput.prototype, "place", void 0);
exports.EventUpdateManyMutationInput = EventUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateManyMutationInput", {})
], EventUpdateManyMutationInput);
