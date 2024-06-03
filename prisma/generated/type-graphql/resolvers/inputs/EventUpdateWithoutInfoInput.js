"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateWithoutInfoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateManyWithoutEventNestedInput_1 = require("../inputs/AttendeeUpdateManyWithoutEventNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput");
let EventUpdateWithoutInfoInput = class EventUpdateWithoutInfoInput {
};
exports.EventUpdateWithoutInfoInput = EventUpdateWithoutInfoInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutInfoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateWithoutInfoInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput)
], EventUpdateWithoutInfoInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput)
], EventUpdateWithoutInfoInput.prototype, "attendees", void 0);
exports.EventUpdateWithoutInfoInput = EventUpdateWithoutInfoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateWithoutInfoInput", {})
], EventUpdateWithoutInfoInput);
