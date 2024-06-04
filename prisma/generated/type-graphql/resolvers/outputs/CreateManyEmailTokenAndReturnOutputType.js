"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmailTokenAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyEmailTokenAndReturnOutputType = class CreateManyEmailTokenAndReturnOutputType {
};
exports.CreateManyEmailTokenAndReturnOutputType = CreateManyEmailTokenAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmailTokenAndReturnOutputType.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyEmailTokenAndReturnOutputType.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyEmailTokenAndReturnOutputType.prototype, "expires", void 0);
exports.CreateManyEmailTokenAndReturnOutputType = CreateManyEmailTokenAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyEmailTokenAndReturnOutputType", {})
], CreateManyEmailTokenAndReturnOutputType);
