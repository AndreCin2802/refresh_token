import { createConnection } from "typeorm";

createConnection()
  .then(async (connection) => {
    console.log("Conectado ao Banco!", connection.driver.database);
  })
  .catch((err) => console.log(err));
