"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateManyInput_1 = require("../../../inputs/InformationCreateManyInput");
let CreateManyInformationArgs = class CreateManyInformationArgs {
};
exports.CreateManyInformationArgs = CreateManyInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationCreateManyInput_1.InformationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInformationArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyInformationArgs = CreateManyInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInformationArgs);
