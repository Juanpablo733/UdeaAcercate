import { createTestClient } from "apollo-server-testing";
import { ApolloServer, gql } from "apollo-server";
import { GET_PROFILE } from "../graphql/client/profile"; // Ajusta la ruta a tu archivo
import { typeDefs } from "@/graphql/server/types";
import { resolvers } from "@/graphql/server/resolvers";

// Mock de datos para la prueba
const mockData = {
  userId: "clof54gmw0000ubqsqu273wel",
};

// Configura el servidor Apollo para pruebas
const testServer = new ApolloServer({
  typeDefs,
  resolvers
    // Puedes agregar aquí tus resolvers si es necesario
  },
  // ...otras configuraciones necesarias para pruebas
);

// Crea un cliente de prueba para interactuar con el servidor
const { query } = createTestClient(testServer);

describe("GET_PROFILE query", () => {
  it("should return profile information for a valid userId", async () => {
    // Usa el cliente de prueba para hacer la consulta
    const { data, errors } = await query({
      query: GET_PROFILE,
      variables: mockData,
    });

    // Verifica que exista data
    expect(data).toBeTruthy();

    // Verifica que el campo 'profile' no sea null o undefined
    expect(data?.profile).not.toBeNull();

    // Si 'profile' existe, verifica propiedades
    if (data?.profile) {
      const expectedProperties = [
        "faculty",
        "career",
        "type",
        "campus",
        "user",
        "description",
        "hobbies",
        "socialLinks",
      ];
      expect(data.profile).toEqual(expect.objectContaining(expectedProperties));
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
