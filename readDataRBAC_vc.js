const { DefaultAzureCredential } = require("@azure/identity");
const { CosmosClient } = require("@azure/cosmos");

async function main() {
  // Use DefaultAzureCredential to authenticate with Azure RBAC
  const credential = new DefaultAzureCredential();

  // Define Cosmos DB endpoint and database name
  const cosmosEndpoint = "https://xxxx.documents.azure.com:443/";
  const databaseId = "xxx";
  const containerId = "test1";

  // Create a new Cosmos client using the token from Azure RBAC
  const client = new CosmosClient({
    endpoint: cosmosEndpoint,
    aadCredentials: credential // RBAC credentials
  });

  try {
    // Access database and container
    const database = client.database(databaseId);
    const container = database.container(containerId);

    // Example operation: Query items from the container
    const querySpec = {
      query: "SELECT * FROM c"
    };

    const { resources: items } = await container.items.query(querySpec).fetchAll();

    console.log("Retrieved items:");
    items.forEach(item => console.log(item));
  } catch (err) {
    console.error("Error occurred while accessing Cosmos DB:", err);
  }
}

main().catch(err => console.error("Main function error:", err));
