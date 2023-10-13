"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreatehashtagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventCreatehashtagsInput = exports.EventCreatehashtagsInput = class EventCreatehashtagsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EventCreatehashtagsInput.prototype, "set", void 0);
exports.EventCreatehashtagsInput = EventCreatehashtagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreatehashtagsInput", {})
], EventCreatehashtagsInput);
