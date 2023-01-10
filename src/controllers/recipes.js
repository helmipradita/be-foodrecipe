const { response } = require(`../middleware/common`);
const {
  selectAllRecipes,
  countAll,
  insertRecipe,
  selectRecipes,
  selectDetailRecipes,
  updateRecipe,
  deleteRecipe,
} = require(`../models/recipes`);
const { v4: uuidv4 } = require('uuid');
const cloudinary = require('../config/photo');

const recipesControllers = {
  getAllRecipes: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 4;
      const sortBy = req.query.sortBy || 'updated_at';
      const sortOrder = req.query.sortOrder || 'DESC';
      const search = req.query.search || '';
      const offset = (page - 1) * limit;

      const result = await selectAllRecipes({
        search,
        sortBy,
        sortOrder,
        limit,
        offset,
      });

      const {
        rows: [count],
      } = await countAll();
      const totalData = parseInt(count.total);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit,
        totalData,
        totalPage,
      };

      response(res, 200, true, result.rows, 'get recipes success', pagination);
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' get recipes failed');
    }
  },
  add: async (req, res, next) => {
    try {
      const { title, ingredients, videos } = req.body;
      const user_id = req.payload.id;

      const dataRecipe = {
        id: uuidv4(),
        title,
        ingredients,
        videos,
        user_id,
      };

      if (req.file) {
        const image = await cloudinary.uploader.upload(req.file.path, {
          folder: 'foodrecipe',
        });

        dataRecipe.photo = image.url;
      } else {
        return response(
          res,
          404,
          false,
          [],
          'insert recipe failed, photo empty'
        );
      }

      await insertRecipe(dataRecipe);
      response(res, 200, true, dataRecipe, 'insert recipe success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'insert recipe failed');
    }
  },
  getMyRecipe: async (req, res, next) => {
    try {
      const { id } = req.payload;

      const recipes = await selectRecipes(id);

      if (!recipes) {
        return response(res, 404, false, [], 'recipes not found');
      }

      response(res, 200, true, recipes.rows, 'get data recipes success');
    } catch (error) {
      response(res, 404, false, null, ' get data recipes failed');
    }
  },
  detailById: async (req, res, next) => {
    try {
      const { id } = req.params;

      const {
        rows: [recipes],
      } = await selectDetailRecipes(id);

      if (!recipes) {
        return response(res, 404, false, [], 'recipes not found');
      }

      response(res, 200, true, recipes, 'get data recipes success');
    } catch (error) {
      response(res, 404, false, null, ' get data recipes failed');
    }
  },
  edit: async (req, res, next) => {
    try {
      const { title, ingredients, videos } = req.body;
      const id = req.params.id;

      const {
        rows: [recipes],
      } = await selectDetailRecipes(id);

      if (!recipes) {
        return response(res, 404, false, [], 'recipes not found');
      }

      const dataRecipe = {
        id,
        title,
        ingredients,
        videos,
      };

      if (req.file) {
        const image = await cloudinary.uploader.upload(req.file.path, {
          folder: 'foodrecipe',
        });

        dataRecipe.photo = image.url;
      } else {
        dataRecipe.photo = recipes.photo;
      }

      await updateRecipe(dataRecipe);
      response(res, 200, true, dataRecipe, 'Edit recipe success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'Edit recipe failed');
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      deleteRecipe(id);
      response(res, 200, true, deleteRecipe, 'delete recipe success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'delete recipe failed');
    }
  },
};

exports.recipesControllers = recipesControllers;
