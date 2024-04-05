const CustomError = require("./CustomError");

const errorHandler = (error, req, res, next) => {
  console.log(error);

  // can be moved to a different file for more detailed handling.
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      errorCode: error.errorCode,
      message: error.message
    });
  }

  /*
    if (error instanceof Some_type) {
    return res.status("Some_Status_Code").json({
      //Handle accordingly
    });
  }
   */


  return res.status(500).send("Something went wrong");
};

module.exports = errorHandler;
