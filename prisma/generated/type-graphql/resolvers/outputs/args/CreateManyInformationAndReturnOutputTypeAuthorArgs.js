"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInformationAndReturnOutputTypeAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereInput_1 = require("../../inputs/UserWhereInput");
let CreateManyInformationAndReturnOutputTypeAuthorArgs = class CreateManyInformationAndReturnOutputTypeAuthorArgs {
};
exports.CreateManyInformationAndReturnOutputTypeAuthorArgs = CreateManyInformationAndReturnOutputTypeAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], CreateManyInformationAndReturnOutputTypeAuthorArgs.prototype, "where", void 0);
exports.CreateManyInformationAndReturnOutputTypeAuthorArgs = CreateManyInformationAndReturnOutputTypeAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInformationAndReturnOutputTypeAuthorArgs);
