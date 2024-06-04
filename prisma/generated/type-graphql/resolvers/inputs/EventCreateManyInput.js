"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventCreateManyInput = class EventCreateManyInput {
};
exports.EventCreateManyInput = EventCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyInput.prototype, "place", void 0);
exports.EventCreateManyInput = EventCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateManyInput", {})
], EventCreateManyInput);
