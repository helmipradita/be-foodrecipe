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

const insertComment = (data) => {
  const { id, comment, recipe_id, user_id } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO comment_user
        (id, comment, recipe_id, user_id, created_at, updated_at) 
      VALUES('${id}', '${comment}', '${recipe_id}', '${user_id}', NOW(), NOW())`,
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

const selectComment = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT comment_user.id, comment_user.comment, 
        recipes.id AS recipes_id, recipes.title AS recipes_name,
        comment_user.user_id,
        to_char( comment_user.created_at, 'day, DD Month YYYY' ) AS created_at, 
        to_char( comment_user.updated_at, 'day, DD Month YYYY' ) AS updated_at
      FROM comment_user AS comment_user
      INNER JOIN recipes AS recipes ON comment_user.recipe_id = recipes.id
      WHERE comment_user.user_id='${id}'
      ORDER BY comment_user.updated_at DESC
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

const selectCommentByRecipe = (recipe_id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT comment_user.id, comment_user.comment, comment_user.recipe_id, 
          comment_user.user_id, users.name AS name,
          to_char( comment_user.created_at, 'day, DD Month YYYY' ) AS created_at, 
          to_char( comment_user.updated_at, 'day, DD Month YYYY' ) AS updated_at
        FROM comment_user AS comment_user
        INNER JOIN users AS users ON comment_user.user_id = users.id
        WHERE comment_user.recipe_id='${recipe_id}'
        ORDER BY comment_user.updated_at DESC
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

const updateComment = ({ id, comment, recipe_id, user_id }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE comment_user 
        SET comment ='${comment}', recipe_id ='${recipe_id}', user_id ='${user_id}', 
            updated_at =NOW()
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

const findComment = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT *
        FROM comment_user AS comment_user
        WHERE comment_user.id='${id}'`,
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

const deleteComment = (id) =>
  Pool.query(`DELETE FROM comment_user WHERE id ='${id}'`);

module.exports = {
  findRecipes,
  insertComment,
  selectComment,
  selectCommentByRecipe,
  updateComment,
  findComment,
  deleteComment,
};
