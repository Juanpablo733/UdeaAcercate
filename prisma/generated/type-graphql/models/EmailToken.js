"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailToken = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailToken = exports.EmailToken = class EmailToken {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailToken.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EmailToken.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EmailToken.prototype, "expires", void 0);
exports.EmailToken = EmailToken = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EmailToken", {})
], EmailToken);
