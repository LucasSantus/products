import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";

import swaggerDocs from "./swagger.json"

const app = express();

const PORT = 3000

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", (request, response) => {
    return response.json({
        message: "Termos de Serviço"
    })
})

app.use("/v1", router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});