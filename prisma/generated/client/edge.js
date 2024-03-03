
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.1
 * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
 */
Prisma.prismaVersion = {
  client: "5.4.1",
  engine: "2f302df92bd8945e20ad4595a73def5b96afa54f"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  image: 'image'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.EmailTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.ProfileScalarFieldEnum = {
  faculty: 'faculty',
  career: 'career',
  type: 'type',
  campus: 'campus',
  userId: 'userId',
  description: 'description',
  hobbies: 'hobbies',
  socialLinks: 'socialLinks'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  place: 'place',
  date: 'date',
  image: 'image',
  tag: 'tag',
  authorId: 'authorId',
  hashtags: 'hashtags'
};

exports.Prisma.AttendeeScalarFieldEnum = {
  userId: 'userId',
  eventId: 'eventId'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  text: 'text',
  dateTime: 'dateTime',
  userId: 'userId',
  eventId: 'eventId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserType = exports.$Enums.UserType = {
  Estudiante: 'Estudiante',
  Profesor: 'Profesor',
  Administrativo: 'Administrativo',
  Egresado: 'Egresado'
};

exports.Campus = exports.$Enums.Campus = {
  Ciudad_Universitaria: 'Ciudad_Universitaria',
  Antigua_Escuela_de_Derecho: 'Antigua_Escuela_de_Derecho',
  Edificio_Suramericana_del_Centro: 'Edificio_Suramericana_del_Centro',
  Sede_Posgrados_Universidad_de_Antioquia: 'Sede_Posgrados_Universidad_de_Antioquia',
  Paraninfo: 'Paraninfo',
  Liceo_Francisco_Restrepo_Molina: 'Liceo_Francisco_Restrepo_Molina',
  Seccional_Oriente: 'Seccional_Oriente',
  Seccional_Occidente_de_la_Universidad_de_Antioquia: 'Seccional_Occidente_de_la_Universidad_de_Antioquia',
  Seccional_Bajo_Cauca: 'Seccional_Bajo_Cauca',
  Sede_Sonson_de_la_Universidad_de_Antioquia: 'Sede_Sonson_de_la_Universidad_de_Antioquia'
};

exports.Tag = exports.$Enums.Tag = {
  Deportivo: 'Deportivo',
  Academico: 'Academico',
  Cultural: 'Cultural'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  EmailToken: 'EmailToken',
  Profile: 'Profile',
  Event: 'Event',
  Attendee: 'Attendee',
  Comment: 'Comment'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Jose\\Desktop\\Jose\\UdeA\\8 Semestre\\Proyecto Integrador 1\\Repositorio\\Nuevo Repo\\UdeaAcercate\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.1",
  "engineVersion": "2f302df92bd8945e20ad4595a73def5b96afa54f",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZ2VuZXJhdG9yIHR5cGVncmFwaHFsIHsNCiAgcHJvdmlkZXIgICAgICAgICAgID0gInR5cGVncmFwaHFsLXByaXNtYSINCiAgb3V0cHV0ICAgICAgICAgICAgID0gIi4uL3ByaXNtYS9nZW5lcmF0ZWQvdHlwZS1ncmFwaHFsIg0KICBlbWl0VHJhbnNwaWxlZENvZGUgPSB0cnVlDQp9DQoNCmRhdGFzb3VyY2UgZGIgew0KICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikNCiAgZGlyZWN0VXJsID0gZW52KCJESVJFQ1RfVVJMIikNCn0NCg0KZW51bSBUYWcgew0KICBEZXBvcnRpdm8NCiAgQWNhZGVtaWNvDQogIEN1bHR1cmFsDQp9DQoNCmVudW0gVXNlclR5cGUgew0KICBFc3R1ZGlhbnRlDQogIFByb2Zlc29yDQogIEFkbWluaXN0cmF0aXZvDQogIEVncmVzYWRvDQp9DQoNCmVudW0gQ2FtcHVzIHsNCiAgQ2l1ZGFkX1VuaXZlcnNpdGFyaWENCiAgQW50aWd1YV9Fc2N1ZWxhX2RlX0RlcmVjaG8NCiAgRWRpZmljaW9fU3VyYW1lcmljYW5hX2RlbF9DZW50cm8NCiAgU2VkZV9Qb3NncmFkb3NfVW5pdmVyc2lkYWRfZGVfQW50aW9xdWlhDQogIFBhcmFuaW5mbw0KICBMaWNlb19GcmFuY2lzY29fUmVzdHJlcG9fTW9saW5hDQogIFNlY2Npb25hbF9PcmllbnRlDQogIFNlY2Npb25hbF9PY2NpZGVudGVfZGVfbGFfVW5pdmVyc2lkYWRfZGVfQW50aW9xdWlhDQogIFNlY2Npb25hbF9CYWpvX0NhdWNhDQogIFNlZGVfU29uc29uX2RlX2xhX1VuaXZlcnNpZGFkX2RlX0FudGlvcXVpYQ0KfQ0KDQptb2RlbCBBY2NvdW50IHsNCiAgaWQgICAgICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKQ0KICB1c2VySWQgICAgICAgICAgICBTdHJpbmcNCiAgdHlwZSAgICAgICAgICAgICAgU3RyaW5nDQogIHByb3ZpZGVyICAgICAgICAgIFN0cmluZw0KICBwcm92aWRlckFjY291bnRJZCBTdHJpbmcNCiAgcmVmcmVzaF90b2tlbiAgICAgU3RyaW5nPyBAZGIuVGV4dA0KICBhY2Nlc3NfdG9rZW4gICAgICBTdHJpbmc/IEBkYi5UZXh0DQogIGV4cGlyZXNfYXQgICAgICAgIEludD8NCiAgdG9rZW5fdHlwZSAgICAgICAgU3RyaW5nPw0KICBzY29wZSAgICAgICAgICAgICBTdHJpbmc/DQogIGlkX3Rva2VuICAgICAgICAgIFN0cmluZz8gQGRiLlRleHQNCiAgc2Vzc2lvbl9zdGF0ZSAgICAgU3RyaW5nPw0KDQogIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpDQoNCiAgQEB1bmlxdWUoW3Byb3ZpZGVyLCBwcm92aWRlckFjY291bnRJZF0pDQp9DQoNCm1vZGVsIFNlc3Npb24gew0KICBpZCAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkNCiAgc2Vzc2lvblRva2VuIFN0cmluZyAgIEB1bmlxdWUNCiAgdXNlcklkICAgICAgIFN0cmluZw0KICBleHBpcmVzICAgICAgRGF0ZVRpbWUNCiAgdXNlciAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCn0NCg0KbW9kZWwgVXNlciB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQ0KICBuYW1lICAgICAgICAgIFN0cmluZz8NCiAgZW1haWwgICAgICAgICBTdHJpbmc/ICAgIEB1bmlxdWUNCiAgZW1haWxWZXJpZmllZCBEYXRlVGltZT8NCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgIERhdGVUaW1lICAgQHVwZGF0ZWRBdA0KICBpbWFnZSAgICAgICAgIFN0cmluZz8NCiAgcHJvZmlsZSAgICAgICBQcm9maWxlPw0KICBldmVudHNDcmVhdGVkIEV2ZW50W10NCiAgYXR0ZW5kZWVzICAgICBBdHRlbmRlZVtdDQogIGNvbW1lbnRzICAgICAgQ29tbWVudFtdDQogIGFjY291bnRzICAgICAgQWNjb3VudFtdDQogIHNlc3Npb25zICAgICAgU2Vzc2lvbltdDQp9DQoNCm1vZGVsIFZlcmlmaWNhdGlvblRva2VuIHsNCiAgaWRlbnRpZmllciBTdHJpbmcNCiAgdG9rZW4gICAgICBTdHJpbmcgICBAdW5pcXVlDQogIGV4cGlyZXMgICAgRGF0ZVRpbWUNCg0KICBAQHVuaXF1ZShbaWRlbnRpZmllciwgdG9rZW5dKQ0KfQ0KDQptb2RlbCBFbWFpbFRva2VuIHsNCiAgaWRlbnRpZmllciBTdHJpbmcgQHVuaXF1ZQ0KICB0b2tlbiAgICAgIFN0cmluZyAgIA0KICBleHBpcmVzICAgIERhdGVUaW1lDQp9DQoNCm1vZGVsIFByb2ZpbGUgew0KICBmYWN1bHR5ICAgICBTdHJpbmc/DQogIGNhcmVlciAgICAgIFN0cmluZz8NCiAgdHlwZSAgICAgICAgVXNlclR5cGU/DQogIGNhbXB1cyAgICAgIENhbXB1cz8NCiAgdXNlcklkICAgICAgU3RyaW5nICAgIEB1bmlxdWUNCiAgdXNlciAgICAgICAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIGhvYmJpZXMgICAgIFN0cmluZz8NCiAgc29jaWFsTGlua3MgU3RyaW5nW10NCn0NCg0KbW9kZWwgRXZlbnQgew0KICBpZCAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpDQogIHRpdGxlICAgICAgIFN0cmluZw0KICBkZXNjcmlwdGlvbiBTdHJpbmcNCiAgcGxhY2UgICAgICAgU3RyaW5nDQogIGRhdGUgICAgICAgIERhdGVUaW1lDQogIGltYWdlICAgICAgIFN0cmluZz8NCiAgdGFnICAgICAgICAgVGFnDQogIGF1dGhvciAgICAgIFVzZXIgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2F1dGhvcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYXV0aG9ySWQgICAgU3RyaW5nDQogIGNvbW1lbnRzICAgIENvbW1lbnRbXQ0KICBhdHRlbmRlZXMgICBBdHRlbmRlZVtdDQogIGhhc2h0YWdzICAgIFN0cmluZ1tdDQp9DQoNCm1vZGVsIEF0dGVuZGVlIHsNCiAgdXNlciAgICBVc2VyICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHVzZXJJZCAgU3RyaW5nDQogIGV2ZW50ICAgRXZlbnQgIEByZWxhdGlvbihmaWVsZHM6IFtldmVudElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZXZlbnRJZCBTdHJpbmcNCg0KICBAQGlkKFt1c2VySWQsIGV2ZW50SWRdKQ0KfQ0KDQptb2RlbCBDb21tZW50IHsNCiAgaWQgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkNCiAgdGV4dCAgICAgU3RyaW5nDQogIGRhdGVUaW1lIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1c2VyICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgdXNlcklkICAgU3RyaW5nDQogIGV2ZW50ICAgIEV2ZW50ICAgIEByZWxhdGlvbihmaWVsZHM6IFtldmVudElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZXZlbnRJZCAgU3RyaW5nDQp9DQo=",
  "inlineSchemaHash": "1d6de28582d9c8f9484800776aaba4e3dd0b23732c2c7e22696ff450d1e6203b",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Account\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"provider\",\"providerAccountId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"provider\",\"providerAccountId\"]}],\"isGenerated\":false},\"Session\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventsCreated\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendees\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendee\",\"relationName\":\"AttendeeToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comment\",\"relationName\":\"CommentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accounts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Account\",\"relationName\":\"AccountToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VerificationToken\":{\"dbName\":null,\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"identifier\",\"token\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"identifier\",\"token\"]}],\"isGenerated\":false},\"EmailToken\":{\"dbName\":null,\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"faculty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"career\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Campus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobbies\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialLinks\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Event\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"place\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tag\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tag\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"EventToUser\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comment\",\"relationName\":\"CommentToEvent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendees\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendee\",\"relationName\":\"AttendeeToEvent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashtags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Attendee\":{\"dbName\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AttendeeToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"AttendeeToEvent\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"eventId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Comment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CommentToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"CommentToEvent\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Tag\":{\"values\":[{\"name\":\"Deportivo\",\"dbName\":null},{\"name\":\"Academico\",\"dbName\":null},{\"name\":\"Cultural\",\"dbName\":null}],\"dbName\":null},\"UserType\":{\"values\":[{\"name\":\"Estudiante\",\"dbName\":null},{\"name\":\"Profesor\",\"dbName\":null},{\"name\":\"Administrativo\",\"dbName\":null},{\"name\":\"Egresado\",\"dbName\":null}],\"dbName\":null},\"Campus\":{\"values\":[{\"name\":\"Ciudad_Universitaria\",\"dbName\":null},{\"name\":\"Antigua_Escuela_de_Derecho\",\"dbName\":null},{\"name\":\"Edificio_Suramericana_del_Centro\",\"dbName\":null},{\"name\":\"Sede_Posgrados_Universidad_de_Antioquia\",\"dbName\":null},{\"name\":\"Paraninfo\",\"dbName\":null},{\"name\":\"Liceo_Francisco_Restrepo_Molina\",\"dbName\":null},{\"name\":\"Seccional_Oriente\",\"dbName\":null},{\"name\":\"Seccional_Occidente_de_la_Universidad_de_Antioquia\",\"dbName\":null},{\"name\":\"Seccional_Bajo_Cauca\",\"dbName\":null},{\"name\":\"Sede_Sonson_de_la_Universidad_de_Antioquia\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

