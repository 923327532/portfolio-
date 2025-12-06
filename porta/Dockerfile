FROM maven:3.8.5-openjdk-17 AS build
# Copia todo el proyecto al contenedor de build
COPY . .
# Compila el proyecto y genera el JAR sin ejecutar tests
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
# Copia el JAR generado desde la etapa de build
COPY --from=build /target/porta-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto de la aplicación
EXPOSE 8080

# Comando de inicio
ENTRYPOINT ["java","-jar","app.jar"]
