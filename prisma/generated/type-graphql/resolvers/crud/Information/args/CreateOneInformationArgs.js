"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationCreateInput_1 = require("../../../inputs/InformationCreateInput");
let CreateOneInformationArgs = class CreateOneInformationArgs {
};
exports.CreateOneInformationArgs = CreateOneInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationCreateInput_1.InformationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationCreateInput_1.InformationCreateInput)
], CreateOneInformationArgs.prototype, "data", void 0);
exports.CreateOneInformationArgs = CreateOneInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneInformationArgs);
