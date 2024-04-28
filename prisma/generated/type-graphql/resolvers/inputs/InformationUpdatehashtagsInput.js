"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdatehashtagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InformationUpdatehashtagsInput = exports.InformationUpdatehashtagsInput = class InformationUpdatehashtagsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdatehashtagsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InformationUpdatehashtagsInput.prototype, "push", void 0);
exports.InformationUpdatehashtagsInput = InformationUpdatehashtagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdatehashtagsInput", {})
], InformationUpdatehashtagsInput);
