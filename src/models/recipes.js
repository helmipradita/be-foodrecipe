const Pool = require(`../config/db`);

const selectAllRecipes = ({ limit, offset, sortBy, sortOrder, search }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM recipes WHERE title 
        ILIKE '%${search}%' ORDER BY ${sortBy} ${sortOrder} 
        LIMIT ${limit} OFFSET ${offset}`,
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

const countAll = () => {
  return Pool.query('SELECT COUNT(*) AS total FROM recipes');
};

const insertRecipe = (data) => {
  const { id, title, photo, ingredients, videos, user_id } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO recipes
        (id, title,  photo, ingredients, videos, 
          user_id, created_at, updated_at) 
      VALUES('${id}', '${title}', '${photo}', '${ingredients}', '${videos}', 
        '${user_id}', NOW(), NOW())`,
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

const selectRecipes = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT recipes.id, recipes.title, recipes.ingredients, recipes.photo, 
        recipes.videos, recipes.user_id, users.name AS author,
        to_char( created_at, 'day, DD Month YYYY' ) AS created_at, 
        to_char( updated_at, 'day, DD Month YYYY' ) AS updated_at
      FROM recipes AS recipes
      INNER JOIN users AS users ON recipes.user_id = users.id
      WHERE users.id='${id}'
      ORDER BY recipes.updated_at DESC`,
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

const selectDetailRecipes = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT recipes.id, recipes.title, recipes.ingredients, recipes.photo, 
        recipes.videos, recipes.user_id, users.name AS author,
        to_char( created_at, 'day, DD Month YYYY' ) AS created_at, 
        to_char( updated_at, 'day, DD Month YYYY' ) AS updated_at
      FROM recipes AS recipes
      INNER JOIN users AS users ON recipes.user_id = users.id
      WHERE recipes.id='${id}'`,
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

const updateRecipe = ({ id, title, photo, ingredients, videos }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE recipes 
      SET title ='${title}', photo ='${photo}', ingredients ='${ingredients}', 
        videos ='${videos}', updated_at =NOW()
      WHERE id='${id}' `,
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

const deleteRecipe = (id) =>
  Pool.query(`DELETE FROM recipes WHERE id ='${id}'`);

module.exports = {
  selectAllRecipes,
  countAll,
  insertRecipe,
  selectRecipes,
  selectDetailRecipes,
  updateRecipe,
  deleteRecipe,
};
