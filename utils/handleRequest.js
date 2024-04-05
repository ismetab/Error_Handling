exports.syncHandleRequest = (controller) => (req, res, next) => {
  try {
    controller(req, res);
  } catch (error) {
    return next(error);
  }
};

exports.asyncHandleRequest = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    return next(error);
  }
};
