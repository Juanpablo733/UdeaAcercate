"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailTokenCreateInput = exports.EmailTokenCreateInput = class EmailTokenCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenCreateInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailTokenCreateInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmailTokenCreateInput.prototype, "expires", void 0);
exports.EmailTokenCreateInput = EmailTokenCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailTokenCreateInput", {})
], EmailTokenCreateInput);
