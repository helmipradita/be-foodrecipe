const Pool = require(`../config/db`);

const findRecipes = (recipe_id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT *
      FROM recipes AS recipes
      WHERE recipes.id='${recipe_id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const findSaveRecipeByUsers = (recipe_id, user_id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT *
        FROM save_recipe AS save_recipe
        WHERE save_recipe.recipe_id='${recipe_id}'
        AND save_recipe.user_id='${user_id}' `,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const insert = (data) => {
  const { id, recipe_id, user_id } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO save_recipe
        (id, recipe_id, user_id, created_at, updated_at) 
      VALUES('${id}', '${recipe_id}', '${user_id}', NOW(), NOW())`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const selectSave = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT save_recipe.id, 
        save_recipe.recipe_id, recipes.title AS recipes_name,
        save_recipe.user_id, recipes.photo,
        to_char( save_recipe.created_at, 'day, DD Month YYYY' ) AS created_at, 
        to_char( save_recipe.updated_at, 'day, DD Month YYYY' ) AS updated_at
      FROM save_recipe AS save_recipe
      INNER JOIN recipes AS recipes ON save_recipe.recipe_id = recipes.id
      WHERE save_recipe.user_id='${id}'
      `,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const findSave = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT *
        FROM save_recipe AS save_recipe
        WHERE save_recipe.id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const deleteSave = (id) =>
  Pool.query(`DELETE FROM save_recipe WHERE id ='${id}'`);

module.exports = {
  findRecipes,
  findSaveRecipeByUsers,
  insert,
  selectSave,
  findSave,
  deleteSave,
};
