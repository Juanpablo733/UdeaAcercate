"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTokenScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EmailTokenScalarFieldEnum;
(function (EmailTokenScalarFieldEnum) {
    EmailTokenScalarFieldEnum["identifier"] = "identifier";
    EmailTokenScalarFieldEnum["token"] = "token";
    EmailTokenScalarFieldEnum["expires"] = "expires";
})(EmailTokenScalarFieldEnum || (exports.EmailTokenScalarFieldEnum = EmailTokenScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EmailTokenScalarFieldEnum, {
    name: "EmailTokenScalarFieldEnum",
    description: undefined,
});
