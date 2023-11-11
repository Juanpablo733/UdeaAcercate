"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmailTokenOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
let FindUniqueEmailTokenOrThrowArgs = exports.FindUniqueEmailTokenOrThrowArgs = class FindUniqueEmailTokenOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], FindUniqueEmailTokenOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueEmailTokenOrThrowArgs = FindUniqueEmailTokenOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEmailTokenOrThrowArgs);
