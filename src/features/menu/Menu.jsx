import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  ////////////////////
  // Styling the Menu
  return (
    <ul className="divide-y divive-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//////////////////////////////////////////////////////
// Fetching Data With React Router Loaders: Pizza Menu
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
