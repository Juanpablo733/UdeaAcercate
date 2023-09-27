import axios from "axios";

const auth0Domain = process.env.AUTH0_ISSUER;
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;

const optionsPost = {
  method: "POST",
  url: `${auth0Domain}/oauth/token`,
  headers: { 'Content-Type': 'application/json' },
  data: {
    "client_id": clientId,
    "client_secret": clientSecret,
    "audience": `${auth0Domain}/api/v2/`,
    "grant_type": "client_credentials"
  }
}

let token:string;

async function auth0Connection() {
  await axios(optionsPost).then(response => {
    token = response.data.access_token;
  })
  .catch(error => {
    console.log("Error al pedir token", error.response);
  });

  return token;
}

export default auth0Connection;