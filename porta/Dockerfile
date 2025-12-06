FROM maven:3.8.5-openjdk-17 AS build
# Ajusta la ruta si es necesario, pero copiar todo es estándar
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
# ¡IMPORTANTE! Asegúrate de que el nombre del JAR coincida con el que genera tu proyecto
# Si tu proyecto se llama 'porta', el JAR podría ser 'porta-0.0.1-SNAPSHOT.jar'
COPY --from=build /target/porta-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]