FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /usr/src/app
EXPOSE 5000
EXPOSE 5001
COPY . .
RUN dotnet restore 
ENV ASPNETCORE_URLS=https://+:5001;http://+:5000
ENTRYPOINT ["dotnet", "watch", "run", "--project", "./GraphServer", "GraphServer.csproj"]