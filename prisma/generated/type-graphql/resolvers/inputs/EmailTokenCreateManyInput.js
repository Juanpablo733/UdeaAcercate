"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailTokenCreateManyInput = exports.EmailTokenCreateManyInput = class EmailTokenCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenCreateManyInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenCreateManyInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmailTokenCreateManyInput.prototype, "expires", void 0);
exports.EmailTokenCreateManyInput = EmailTokenCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenCreateManyInput", {})
], EmailTokenCreateManyInput);
