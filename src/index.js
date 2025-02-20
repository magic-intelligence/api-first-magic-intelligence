const express = require("express");
const path = require("path");
const { initialize } = require("express-openapi");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const PORT = process.env.PORT || 3001;

// Cargar la documentación OpenAPI desde YAML
const openapiStudent = path.join(__dirname, "../docs/student.openapi.yaml");
const swaggerDocument = YAML.load(openapiStudent);

// const openapiPrueba = path.join(__dirname, "../docs/student.openapi.yaml");
// const swaggerPrueba = YAML.load(openapiPrueba);

// Inicializar express-openapi
initialize({
  app,
  apiDoc: openapiStudent,
  paths: path.join(__dirname, "../docs"),
});

// Servir Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerPrueba));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación en http://localhost:${PORT}/api-docs`);
});
