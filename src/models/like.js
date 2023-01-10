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

const findLikeRecipeByUsers = (recipe_id, user_id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT *
        FROM like_recipe AS like_recipe
        WHERE like_recipe.recipe_id='${recipe_id}'
        AND like_recipe.user_id='${user_id}' `,
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

const insertLike = (data) => {
  const { id, recipe_id, user_id } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO like_recipe
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

const selectLike = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT like_recipe.id, 
        like_recipe.recipe_id, recipes.title AS recipes_name,
        like_recipe.user_id,
        to_char( like_recipe.created_at, 'day, DD Month YYYY' ) AS created_at, 
        to_char( like_recipe.updated_at, 'day, DD Month YYYY' ) AS updated_at
      FROM like_recipe AS like_recipe
      INNER JOIN recipes AS recipes ON like_recipe.recipe_id = recipes.id
      WHERE like_recipe.user_id='${id}'
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

const findLike = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT *
        FROM like_recipe AS like_recipe
        WHERE like_recipe.id='${id}'`,
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

const deleteLike = (id) =>
  Pool.query(`DELETE FROM like_recipe WHERE id ='${id}'`);

module.exports = {
  findRecipes,
  findLikeRecipeByUsers,
  insertLike,
  selectLike,
  findLike,
  deleteLike,
};
