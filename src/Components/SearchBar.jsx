import React from "react";

const SearchCard = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                disabled={isLoading}
                onChange={onChange}
                placeholder="SearchRecipes"
                className="form-control"
            />
            <input 
                disabled={isLoading || !value}
                type="submit"
                className="btn"
                value="Search"
            />

        </form>
    )
};
export default SearchCard;