// import { INestApplication } from "@nestjs/common";
// import { Test, TestingModule } from "@nestjs/testing";
// import { EducationalCenterRepositoryImpl } from "src/adapters/persistence/repositories/educational-center.repository.impl";
// import { EducationalCenterSchema } from "src/adapters/persistence/schemas/educational-center.schema";
// import { AppModule } from "src/app.module";
// import { EducationalCenterModule } from "../../../../src/core/educational-center/educational-center.module";
// import { createMemoryDatabase } from "src/shared/utils/pg-mem/create.memory.database";
// import { DataSource } from "typeorm";
// import { EDUCATIONAL_CENTER_REPOSITORY } from "src/core/educational-center/domain/repositories/educational-center.repository";

// // Metodología: Behavior Driven Development
// // Patron: Given-When-Then
// describe('Pruebas al educational-center.repository.impl.ts', ()=>{
//     // Given
//     let app: INestApplication;
//     let datasource: DataSource;
//     let repository: EducationalCenterRepositoryImpl;

//     // When
//     beforeAll(async ()=>{
//         datasource = await createMemoryDatabase();

//         const moduleFixture: TestingModule = await Test.createTestingModule({
//             imports: [AppModule],
//             providers: [
//                 {
//                     provide: EDUCATIONAL_CENTER_REPOSITORY,
//                     useValue: datasource.getRepository(EducationalCenterSchema),
//                 },
//                 EducationalCenterRepositoryImpl,
//             ],
//         }).compile();

//         app = moduleFixture.createNestApplication();
//         await app.init();
//         repository = moduleFixture.get<EducationalCenterRepositoryImpl>(EducationalCenterRepositoryImpl);
//     });


//     afterAll(async () => {
//         if (datasource && datasource.isInitialized) {
//             await datasource.destroy();
//         }
//         if (app) {
//             await app.close();
//         }
//     });

//     // Then
//     test('Debe guardar un centro educativo(EducativeCenter)', async () => {
//         // Given
//         const schema: EducationalCenterSchema = {
//           name: 'Magic Intelligence',
//           isActive: true,
//           createdAt: new Date('2025-03-11T20:58:06.331Z'),
//           updatedAt: new Date('2025-03-11T20:58:06.331Z'),
//         };
    
//         // When
//         const result = await repository.save(schema);
//         console.log(result, 'resultadoooooooooooooooooooooooooooooooo');
//         // Then
//         expect(result).not.toBeNull();
//       });
// });