"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateManyWithoutEventNestedInput_1 = require("../inputs/AttendeeUpdateManyWithoutEventNestedInput");
const InformationUpdateOneRequiredWithoutEventNestedInput_1 = require("../inputs/InformationUpdateOneRequiredWithoutEventNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let EventUpdateWithoutAuthorInput = class EventUpdateWithoutAuthorInput {
};
exports.EventUpdateWithoutAuthorInput = EventUpdateWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutAuthorInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateOneRequiredWithoutEventNestedInput_1.InformationUpdateOneRequiredWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateOneRequiredWithoutEventNestedInput_1.InformationUpdateOneRequiredWithoutEventNestedInput)
], EventUpdateWithoutAuthorInput.prototype, "info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput)
], EventUpdateWithoutAuthorInput.prototype, "attendees", void 0);
exports.EventUpdateWithoutAuthorInput = EventUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateWithoutAuthorInput", {})
], EventUpdateWithoutAuthorInput);
