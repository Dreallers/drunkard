import { useState } from "react";

// y rajouter un useLoaderData?
// y rajouter un await?
// y rajouter l'auto-complétion

function Searchbar() {
  // passer les props
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="What are you looking for?"
        onInput={(event) => {
          setSearchInput(event.target.value);
          return { searchInput };
        }}
      />
      {/* {() => {
        return (
          <>
            {ingredients
              .filter((ingredient) => {
                if (
                  ingredient.bottleName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                ) {
                  return true;
                }
              })
              .map((ingredient) => {
                return (
                  <Card key={ingredient.id} />
                    
                    // remplacer par Card et son verso 
                  
                );
              })}
          </>
        );
      }} */}
    </div>
  );
}

export default Searchbar;
