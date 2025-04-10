const express = require("express");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const PORT = process.env.PORT || 3001;

const swaggerDocumentEducationalCenter = YAML.load(path.join(__dirname, "../docs/educational.center.openapi.yaml"));
const swaggerDocumentStudent = YAML.load(path.join(__dirname, "../docs/student.openapi.yaml"));
const swaggerDocumentService = YAML.load(path.join(__dirname, "../docs/service.openapi.yaml"));
const swaggerDocumentBranchOffice = YAML.load(path.join(__dirname, "../docs/branch.office.openapi.yaml"));
const swaggerDocumentGroup = YAML.load(path.join(__dirname, "../docs/group.openapi.yaml"));

// Middleware para servir Swagger UI con documentos específicos
const serveSwagger = (swaggerDoc) => (req, res, next) => {
  swaggerUi.setup(swaggerDoc)(req, res, next);
};
// Servir Swagger UI
app.use("/api-docs/students", swaggerUi.serve, serveSwagger(swaggerDocumentStudent)); 
app.use("/api-docs/educational-centers", swaggerUi.serve, serveSwagger(swaggerDocumentEducationalCenter));
app.use("/api-docs/services", swaggerUi.serve, serveSwagger(swaggerDocumentService));
app.use("/api-docs/branch-offices", swaggerUi.serve, serveSwagger(swaggerDocumentBranchOffice));
app.use("/api-docs/groups", swaggerUi.serve, serveSwagger(swaggerDocumentGroup));

app.listen(PORT, () => {
  const pathUrl = `http://localhost:${PORT}/api-docs` 
  console.log(`Servidor corriendo en ${pathUrl}`);
  console.log(`Documentación en ${pathUrl}/students`);
  console.log(`Documentación en ${pathUrl}/educational-centers`);
  console.log(`Documentación en ${pathUrl}/services`);
  console.log(`Documentación en ${pathUrl}/groups`);
  console.log(`Documentación en ${pathUrl}/branch-offices`);
});
