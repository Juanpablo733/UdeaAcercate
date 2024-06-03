"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUpdateManyWithoutEventNestedInput_1 = require("../inputs/AttendeeUpdateManyWithoutEventNestedInput");
const InformationUpdateOneRequiredWithoutEventNestedInput_1 = require("../inputs/InformationUpdateOneRequiredWithoutEventNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutEventsCreatedNestedInput");
let EventUpdateInput = class EventUpdateInput {
};
exports.EventUpdateInput = EventUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EventUpdateInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutEventsCreatedNestedInput_1.UserUpdateOneRequiredWithoutEventsCreatedNestedInput)
], EventUpdateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateOneRequiredWithoutEventNestedInput_1.InformationUpdateOneRequiredWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationUpdateOneRequiredWithoutEventNestedInput_1.InformationUpdateOneRequiredWithoutEventNestedInput)
], EventUpdateInput.prototype, "info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeUpdateManyWithoutEventNestedInput_1.AttendeeUpdateManyWithoutEventNestedInput)
], EventUpdateInput.prototype, "attendees", void 0);
exports.EventUpdateInput = EventUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdateInput", {})
], EventUpdateInput);
