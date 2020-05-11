package com.alfonsocortes.mitienda;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.alfonsocortes.mitienda");

        noClasses()
            .that()
                .resideInAnyPackage("com.alfonsocortes.mitienda.service..")
            .or()
                .resideInAnyPackage("com.alfonsocortes.mitienda.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..com.alfonsocortes.mitienda.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
