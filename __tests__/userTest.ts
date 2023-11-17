import { GET_USER_BY_EMAIL } from "../graphql/client/user";

const { createTestClient } = require("apollo-server-testing");
const { ApolloServer, gql } = require("apollo-server");
const { typeDefs, resolvers } = require("../graphql/client/user");

// Configura el servidor Apollo para pruebas
const testServer = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers,
  // ...otras configuraciones necesarias para pruebas
});

// Crea un cliente de prueba para interactuar con el servidor
const { query } = createTestClient(testServer);

describe("GET_USER_BY_EMAIL query", () => {
  it("should return user information for a valid email", async () => {
    const testEmail = "juan.bedoya3@udea.edu.co";

    // Usa el cliente de prueba para hacer la consulta
    const { data, errors } = await query({
      query: GET_USER_BY_EMAIL,
      variables: { email: testEmail },
    });

    // Verifica que exista data
    expect(data).toBeTruthy();

    // Verifica que el campo 'user' no sea null o undefined
    expect(data?.user).not.toBeNull();

    // Si 'user' existe, verifica propiedades utilizando expect.objectContaining
    if (data?.user) {
      const expectedProperties = ["id", "name", "email", "emailVerified", "image"];
      expect(data.user).toEqual(expect.objectContaining(expectedProperties));
    }

    // Manejo de errores
    if (errors) {
      console.error("Errores de GraphQL:", errors);
    }

    // Verifica que no haya errores graves
    expect(errors).toBeFalsy();
  });

  // Puedes agregar más casos de prueba según sea necesario
});
