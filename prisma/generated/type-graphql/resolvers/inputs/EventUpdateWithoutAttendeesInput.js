"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateWithoutAttendeesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationUpdateOneRequiredWithoutEventNestedInput_1 = require("../inputs/InformationUpdateOneRequiredWithoutEventNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput");
let EventUpdateWithoutAttendeesInput = exports.EventUpdateWithoutAttendeesInput = class EventUpdateWithoutAttendeesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAttendeesInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput)
], EventUpdateWithoutAttendeesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateOneRequiredWithoutEventNestedInput_1.InformationUpdateOneRequiredWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateOneRequiredWithoutEventNestedInput_1.InformationUpdateOneRequiredWithoutEventNestedInput)
], EventUpdateWithoutAttendeesInput.prototype, "info", void 0);
exports.EventUpdateWithoutAttendeesInput = EventUpdateWithoutAttendeesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateWithoutAttendeesInput", {})
], EventUpdateWithoutAttendeesInput);
