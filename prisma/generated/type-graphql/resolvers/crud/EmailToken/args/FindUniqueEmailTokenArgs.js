"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
let FindUniqueEmailTokenArgs = exports.FindUniqueEmailTokenArgs = class FindUniqueEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], FindUniqueEmailTokenArgs.prototype, "where", void 0);
exports.FindUniqueEmailTokenArgs = FindUniqueEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEmailTokenArgs);
