import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess, FilterList, Add, Close } from '@mui/icons-material';
import './../../assets/css/style.css';

const FilterSidebar = () => {
  const [open, setOpen] = useState({});
  const [addIngredient, setAddIngredient] = useState(false);
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleClick = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAddIngredientClick = () => {
    setAddIngredient(!addIngredient);
  };

  const handleInputChange = (value) => {
    setIngredientInput(value);
  };

  const handleSaveIngredient = () => {
    setIngredients((prev) => [...prev, ingredientInput]);
    setAddIngredient(false);
    setIngredientInput('');
  };

  const handleCancelIngredient = () => {
    setAddIngredient(false);
    setIngredientInput('');
  };

  const handleRemoveIngredient = (index) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="filter-sidebar">
      <div className="search-container">
        <input type="text" placeholder="Search" className="form-control" />
        <div className="filter-icon">
          <FilterList />
          <span className="filter-icon-text">Filter By</span>
        </div>
      </div>
      <List component="nav" className="filter-list">
        {['Food Categories', 'Ingredient Customization', 'Cost Effective Meal'].map((text) => (
          <React.Fragment key={text}>
            <ListItem
              button
              onClick={() => handleClick(text)}
              className="main-filter"
            >
              <ListItemText primary={text} />
              {open[text] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open[text]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {text === 'Cost Effective Meal' && (
                  <div className="add-ingredient-section mb-4">
                    <div className="add-ingredient-header">
                      <span>Add Ingredient</span>
                      <Button onClick={handleAddIngredientClick} className="black-button">
                        <Add className="icon-black" />
                      </Button>
                    </div>
                    {addIngredient && (
                      <div className="add-ingredient ms-3">
                        <input
                          type="text"
                          placeholder="Enter ingredient"
                          className="form-control add-ingredient-input p-3"
                          value={ingredientInput}
                          onChange={(e) => handleInputChange(e.target.value)}
                        />
                        <div className="add-ingredient-buttons mt-3">
                          <Button
                            variant="contained"
                            onClick={handleSaveIngredient}
                            // className="black-button"
                          >
                            Save
                          </Button>
                          <Button
                            variant="contained"
                            onClick={handleCancelIngredient}
                            // className="black-button"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                    <div className="ingredient-list">
                      {ingredients.map((ingredient, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={`${index + 1}. ${ingredient}`} />
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleRemoveIngredient(index)}
                            className="black-button"
                          >
                            <Close className="icon-black" />
                          </IconButton>
                        </ListItem>
                      ))}
                    </div>
                  </div>
                )}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default FilterSidebar;
