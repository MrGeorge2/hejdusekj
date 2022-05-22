FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /usr/src/app
COPY . .
RUN dotnet restore 
RUN dotnet dev-certs https --clean
RUN dotnet dev-certs https -t
ENTRYPOINT ["dotnet", "watch", "run", "--project", "./GraphServer", "GraphServer.csproj"]