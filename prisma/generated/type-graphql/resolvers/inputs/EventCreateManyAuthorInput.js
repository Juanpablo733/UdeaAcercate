"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventCreateManyAuthorInput = exports.EventCreateManyAuthorInput = class EventCreateManyAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventCreateManyAuthorInput.prototype, "place", void 0);
exports.EventCreateManyAuthorInput = EventCreateManyAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateManyAuthorInput", {})
], EventCreateManyAuthorInput);
