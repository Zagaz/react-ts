import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

export default function PageUseEffect() {
     //
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
     // Call function fetch asynch data from API
    fetchAPI();
  }, [resourceType]);

  // Function to fetch data from API
  async function fetchAPI() {
    let url = `https://jsonplaceholder.typicode.com/${resourceType}`;
    try {
      const asyncResponse = await fetch(url);
      const response = await asyncResponse.json();
      setItems(response);
    } catch (e: any) {
      alert("Error: " + e.message);
    }
  }
// Function to change the item 'resourceType' (posts, users, comments, photos)
  function changeItem(item: string): void {
    setResourceType(item);
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
          {resourceType === "albums/100/photos" ? "photos" : resourceType}
        </h1>
      </div>
      {/** Render Cards */}
      {/** Depending on the resourceType, the card will have different data */}
      <div className="card-container">
        {resourceType === "posts" &&
          items.map((item: any) => {
            return <Card key={item.id} title={item.title} body={item.body} />;
          })}

        {resourceType === "users" &&
          items.map((item: any) => {
            return <Card key={item.id} name={item.name} mail={item.email} />;
          })}

        {resourceType === "comments" &&
          items.map((item: any) => {
            return <Card key={item.id} name={item.name} mail={item.email} />;
          })}
        {resourceType === "albums/100/photos" &&
          items.map((item: any) => {
            return (
              <Card key={item.id} url={item.thumbnailUrl} name={item.title} />
            );
          })}
      </div>
    </div>
  );
}