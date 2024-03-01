"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdatehashtagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventUpdatehashtagsInput = exports.EventUpdatehashtagsInput = class EventUpdatehashtagsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdatehashtagsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventUpdatehashtagsInput.prototype, "push", void 0);
exports.EventUpdatehashtagsInput = EventUpdatehashtagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventUpdatehashtagsInput", {})
], EventUpdatehashtagsInput);
