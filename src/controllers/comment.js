const { response } = require(`../middleware/common`);
const {
  findRecipes,
  insertComment,
  selectComment,
  selectCommentByRecipe,
  updateComment,
  findComment,
  deleteComment,
} = require(`../models/comment`);
const { v4: uuidv4 } = require('uuid');

const commentControllers = {
  add: async (req, res, next) => {
    try {
      const recipe_id = req.params.recipe_id;
      const comment = req.body.comment;
      const user_id = req.payload.id;

      const {
        rows: [recipes],
      } = await findRecipes(recipe_id);

      if (!recipes) {
        return response(res, 404, false, [], 'recipes not found');
      }

      //   console.log(comment_user);

      const data = {
        id: uuidv4(),
        comment,
        recipe_id,
        user_id,
      };

      await insertComment(data);
      response(res, 200, true, data, 'insert comment success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'insert comment failed');
    }
  },
  get: async (req, res, next) => {
    try {
      const { id } = req.payload;

      const comment = await selectComment(id);

      if (!comment) {
        return response(res, 404, false, [], 'comment not found');
      }

      response(res, 200, true, comment.rows, 'get data comment success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' get data comment failed');
    }
  },
  getByRecipeId: async (req, res, next) => {
    try {
      const recipe_id = req.params.recipe_id;

      const {
        rows: [recipes],
      } = await findRecipes(recipe_id);

      if (!recipes) {
        return response(res, 404, false, [], 'recipes not found');
      }

      const comment = await selectCommentByRecipe(recipe_id);

      response(res, 200, true, comment.rows, 'get data comment success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' get data comment failed');
    }
  },
  edit: async (req, res, next) => {
    try {
      const user_id = req.payload.id;
      const id = req.params.id;
      const comment = req.body.comment;

      const comment_user = await selectComment(user_id);

      if (!comment_user) {
        return response(res, 404, false, [], 'comment not found');
      }

      const {
        rows: [dataComment],
      } = await findComment(id);

      if (!dataComment) {
        return response(res, 404, false, [], 'comment not found');
      }

      const recipe_id = dataComment.recipe_id;

      const data = {
        id,
        comment,
        recipe_id,
        user_id,
      };

      await updateComment(data);
      response(res, 200, true, data, 'edit data comment success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' edit data comment failed');
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;

      const {
        rows: [comment],
      } = await findComment(id);

      if (!comment) {
        return response(res, 404, false, [], 'comment not found');
      }

      await deleteComment(id);
      response(res, 200, true, deleteComment, 'delete comment success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'delete comment failed');
    }
  },
};

exports.commentControllers = commentControllers;
