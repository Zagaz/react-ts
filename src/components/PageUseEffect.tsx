import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

export default function PageUseEffect() {
  // constant url string type

  const  url: string = "https://jsonplaceholder.typicode.com/";

  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
     // Call function fetch asynch data from API when the component is mounted and when the resourceType state changes.
    fetchAPI();
  }, [resourceType]);

  // Function to fetch data from API
  async function fetchAPI() {
    
    try {
      const asyncResponse = await fetch(url + resourceType);
      const response = await asyncResponse.json();
      setItems(response);
    } catch (e: any) {
      alert("Error: " + e.message);
    }
  }
  // Function to change the resourceType state with the item selected.
  function changeItem(item: string): void {
    setResourceType(item);
  }

  
  // Function to generate the card depending on the resourceType selected.
  function generateCard() {
  switch (resourceType) {
    case "posts":
      return items.map((item: any) => {
        return <Card key={item.id} title={item.title} body={item.body} />;
      });
    case "users":
      return items.map((item: any) => {
        return <Card key={item.id} name={item.name} mail={item.email} />;
      });
    case "comments":
      return items.map((item: any) => {
        return <Card key={item.id} name={item.name} mail={item.email} />;
      });
    case "albums/100/photos":
      return items.map((item: any) => {
        return (
          <Card key={item.id} url={item.thumbnailUrl} name={item.title} />
        );
      });
    default:
      return items.map((item: any) => {
        return <Card key={item.id} title={item.title} body={item.body} />;
      });
  }
}




// Array of items to create the buttons
  let btItems: [string, string][];
  btItems = [
    ["posts", "Posts"],
    ["comments", "Comments"],
    ["users", "Users"],
    ["albums/100/photos", "Photos"],
  ];

  return (
    <div>
      <div className="buttons-container">
        {
          /** Render Buttons */
        btItems.map((item: [string, string]) => {
          return (
            <Button key={item[0]} onClick={() => changeItem(item[0])}>
              {" "}
              {item[1]}{" "}
            </Button>
          );
        })}
      </div>
      <div className="page-title">
        <h1>
          {
          resourceType === "albums/100/photos" ? "photos" : resourceType
          }
        </h1>
      </div>
      {/** Render Cards */}
      {/** Depending on the resourceType, the card will have different data */}
      <div className="card-container">
        {generateCard()}
      </div>
    </div>
  );
}
