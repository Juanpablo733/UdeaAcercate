"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCreatehashtagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InformationCreatehashtagsInput = class InformationCreatehashtagsInput {
};
exports.InformationCreatehashtagsInput = InformationCreatehashtagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InformationCreatehashtagsInput.prototype, "set", void 0);
exports.InformationCreatehashtagsInput = InformationCreatehashtagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationCreatehashtagsInput", {})
], InformationCreatehashtagsInput);
