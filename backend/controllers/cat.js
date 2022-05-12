const fetch = require("node-fetch");

exports.getCatBreedsBySearch = async (req, res) => {
  try {
    const { breed } = req.body;

    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "583880c5-a3cb-4b56-b9c0-0837685ffb98",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        res.status(200).json({
          success: true,
          data: data,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllCats = async (req, res) => {
  try {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "583880c5-a3cb-4b56-b9c0-0837685ffb98",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        res.status(200).json({
          success: true,
          data: data,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCatById = async (req, res) => {
  try {
    const { id } = req.params;

    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "583880c5-a3cb-4b56-b9c0-0837685ffb98",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        res.status(200).json({
          success: true,
          data: data,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
