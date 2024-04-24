"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenWhereUniqueInput_1 = require("../../../inputs/EmailTokenWhereUniqueInput");
let DeleteOneEmailTokenArgs = exports.DeleteOneEmailTokenArgs = class DeleteOneEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereUniqueInput_1.EmailTokenWhereUniqueInput)
], DeleteOneEmailTokenArgs.prototype, "where", void 0);
exports.DeleteOneEmailTokenArgs = DeleteOneEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneEmailTokenArgs);
