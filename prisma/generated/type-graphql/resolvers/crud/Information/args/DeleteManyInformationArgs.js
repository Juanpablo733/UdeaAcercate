"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationWhereInput_1 = require("../../../inputs/InformationWhereInput");
let DeleteManyInformationArgs = class DeleteManyInformationArgs {
};
exports.DeleteManyInformationArgs = DeleteManyInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], DeleteManyInformationArgs.prototype, "where", void 0);
exports.DeleteManyInformationArgs = DeleteManyInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInformationArgs);
