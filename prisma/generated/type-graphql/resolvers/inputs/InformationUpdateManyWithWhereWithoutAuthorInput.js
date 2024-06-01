"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationScalarWhereInput_1 = require("../inputs/InformationScalarWhereInput");
const InformationUpdateManyMutationInput_1 = require("../inputs/InformationUpdateManyMutationInput");
let InformationUpdateManyWithWhereWithoutAuthorInput = exports.InformationUpdateManyWithWhereWithoutAuthorInput = class InformationUpdateManyWithWhereWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationScalarWhereInput_1.InformationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationScalarWhereInput_1.InformationScalarWhereInput)
], InformationUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationUpdateManyMutationInput_1.InformationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InformationUpdateManyMutationInput_1.InformationUpdateManyMutationInput)
], InformationUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
exports.InformationUpdateManyWithWhereWithoutAuthorInput = InformationUpdateManyWithWhereWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InformationUpdateManyWithWhereWithoutAuthorInput", {})
], InformationUpdateManyWithWhereWithoutAuthorInput);
