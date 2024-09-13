# CosmosDBnodeJS_RBAC

Application requests to most Azure services must be authorized. Use the DefaultAzureCredential type as the preferred way to implement a passwordless connection between your applications and Azure Cosmos DB for NoSQL. DefaultAzureCredential supports multiple authentication methods and determines which method should be used at runtime.

This sample creates a new instance of the CosmosClient type and authenticates using a DefaultAzureCredential instance.

Reference document:
https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-nodejs?tabs=javascript&pivots=devcontainer-vscode#authenticate-the-client
