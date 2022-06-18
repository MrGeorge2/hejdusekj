FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine as Builder

WORKDIR /src

COPY . .

RUN dotnet restore

RUN dotnet publish -o ./publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine as Runner

WORKDIR /app

USER nobody

COPY --from=Builder /src/publish .
ENV ASPNETCORE_URLS=http://+:5000

ENTRYPOINT [ "dotnet", "GraphServer.dll" ]