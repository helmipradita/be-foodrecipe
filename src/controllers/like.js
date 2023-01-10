const { response } = require(`../middleware/common`);
const {
  findRecipes,
  findLikeRecipeByUsers,
  insertLike,
  selectLike,
  findLike,
  deleteLike,
} = require(`../models/like`);
const { v4: uuidv4 } = require('uuid');

const likeControllers = {
  add: async (req, res, next) => {
    try {
      const recipe_id = req.params.id;
      const user_id = req.payload.id;

      const {
        rows: [recipes],
      } = await findRecipes(recipe_id);

      if (!recipes) {
        return response(res, 404, false, [], 'recipes not found');
      }

      const {
        rows: [like_recipe],
      } = await findLikeRecipeByUsers(recipe_id, user_id);

      if (like_recipe) {
        return response(res, 404, false, [], 'you have like this recipes');
      }

      //   console.log(like_recipe);

      const data = {
        id: uuidv4(),
        recipe_id,
        user_id,
      };

      await insertLike(data);
      response(res, 200, true, data, 'insert like recipe success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'insert like recipe failed');
    }
  },
  get: async (req, res, next) => {
    try {
      const { id } = req.payload;

      const like = await selectLike(id);

      if (!like) {
        return response(res, 404, false, [], 'like not found');
      }

      console.log(id);

      response(res, 200, true, like.rows, 'get data like success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' get data like failed');
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const {
        rows: [like],
      } = await findLike(id);

      if (!like) {
        return response(res, 404, false, [], 'like not found');
      }

      deleteLike(id);
      response(res, 200, true, deleteLike, 'delete like success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'delete like failed');
    }
  },
};

exports.likeControllers = likeControllers;
