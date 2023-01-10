const { response } = require(`../middleware/common`);
const {
  findRecipes,
  findSaveRecipeByUsers,
  insert,
  selectSave,
  findSave,
  deleteSave,
} = require(`../models/save`);
const { v4: uuidv4 } = require('uuid');

const saveControllers = {
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
        rows: [save_recipe],
      } = await findSaveRecipeByUsers(recipe_id, user_id);

      if (save_recipe) {
        return response(res, 404, false, [], 'you have save this recipes');
      }

      //   console.log(save_recipe);

      const data = {
        id: uuidv4(),
        recipe_id,
        user_id,
      };

      await insert(data);
      response(res, 200, true, data, 'insert like recipe success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'insert like recipe failed');
    }
  },
  get: async (req, res, next) => {
    try {
      const { id } = req.payload;

      const save = await selectSave(id);

      if (!save) {
        return response(res, 404, false, [], 'save not found');
      }

      console.log(id);

      response(res, 200, true, save.rows, 'get data save success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' get data save failed');
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const {
        rows: [save],
      } = await findSave(id);

      if (!save) {
        return response(res, 404, false, [], 'save not found');
      }

      deleteSave(id);
      response(res, 200, true, deleteSave, 'delete save success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'delete save failed');
    }
  },
};

exports.saveControllers = saveControllers;
