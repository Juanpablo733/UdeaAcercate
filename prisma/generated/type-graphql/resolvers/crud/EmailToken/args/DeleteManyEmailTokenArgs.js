"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEmailTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailTokenWhereInput_1 = require("../../../inputs/EmailTokenWhereInput");
let DeleteManyEmailTokenArgs = exports.DeleteManyEmailTokenArgs = class DeleteManyEmailTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailTokenWhereInput_1.EmailTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailTokenWhereInput_1.EmailTokenWhereInput)
], DeleteManyEmailTokenArgs.prototype, "where", void 0);
exports.DeleteManyEmailTokenArgs = DeleteManyEmailTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEmailTokenArgs);
