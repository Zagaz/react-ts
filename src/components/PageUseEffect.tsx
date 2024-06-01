import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";

export default function PageUseEffect() {
  // Define the base URL for the API
  const url: string = "https://jsonplaceholder.typicode.com/";

  // Define state variables for the resource type, fetched items, and any error message
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState<any>([]);
  const [error, setError] = useState<string>("");

  // Use the useEffect hook to fetch data when the component mounts and when the resourceType changes
  useEffect(() => {
    fetchAPI();
  }, [resourceType]);

  // Define an async function to fetch data from the API
  async function fetchAPI() {
    try {
      // Fetch data from the API
      const asyncResponse = await fetch(url + resourceType);
      const response = await asyncResponse.json();
      setItems(response);

      // Handle potential errors
      if (response === undefined) {
        throw new Error("Network Error");
      }
      if (response.status === 404) {
        throw new Error("Request failed with status code 404");
      }
      if (response.status === 500) {
        throw new Error("Request failed with status code 500");
      }
    } catch (e: any) {
      // Set the error message if an error occurred
      setError(e.message);
    }
  }

  // Define a function to change the resourceType state
  function changeItem(item: string): void {
    setResourceType(item);
  }

  // Define a function to generate the appropriate card based on the resourceType
  function generateCard() {
    switch (resourceType) {
      case "posts":
        return items.map((item: any) => {
          return <Card key={item.id} type={resourceType} title={item.title} body={item.body} />;
        });
      case "users":
      case "comments":
        return items.map((item: any) => {
          return <Card key={item.id} type={resourceType} name={item.name} mail={item.email} />;
        });
      case "albums/100/photos":
        return items.map((item: any) => {
          return (
            <Card key={item.id} type={resourceType} url={item.thumbnailUrl} name={item.title} />
          );
        });
      default:
        return items.map((item: any) => {
          return <Card key={item.id} type={resourceType} title={item.title} body={item.body} />;
        });
    }
  }

  // Define an array of items to create the buttons
  let btItems: [string, string][];
  btItems = [
    ["posts", "Posts"],
    ["comments", "Comments"],
    ["users", "Users"],
    ["albums/100/photos", "Photos"],
  ];

  // Render the component
  return (
    <div>
      <div className="buttons-container">
        {/* Render buttons for each resource type */}
        {btItems.map((item: [string, string]) => {
          return (
            <Button key={item[0]} onClick={() => changeItem(item[0])}>
              {item[1]}
            </Button>
          );
        })}
      </div>
      <div className="page-title">
        {/* Display an error message if there is one */}
        {error && <div className="error">Error Message: <br /> {error}. Please contact admistrator</div>}
        {/* Display the resource type as the page title */}
        <h1>
          {resourceType === "albums/100/photos" ? "photos" : resourceType}
        </h1>
      </div>
      {/* Render the cards */}
      <div className="card-container">
        {generateCard()}
      </div>
    </div>
  );
}