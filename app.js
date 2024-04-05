const express = require("express");
const CustomError = require("./error/CustomError");
const { ACCOUNT_LOCKED} = require("./constants/errorCodes");
const errorHandler = require("./error/errorHandler");
const { handleRequest, asyncHandleRequest, syncHandleRequest} = require("./utils/handleRequest");

const app = express();

const getUser = () => undefined;

app.get(
    "/test",
    syncHandleRequest((req, res) => {
        const user = getUser();
        if (!user) {
            throw new Error("User not found");
        }

        return res.status(200).json({ success: true });
    })
);


app.get(
    "/test2",
    asyncHandleRequest(async (req, res) => {
        const user = getUser();
        if (!user) {
            throw new CustomError(ACCOUNT_LOCKED,"Unauthorized exception occured", 401);
        }

        return res.status(200).json({ success: true });
    })
);

app.get("/test3", syncHandleRequest((req, res) => {
    const user = getUser();
    if (!user) {
        throw new CustomError(ACCOUNT_LOCKED,"Unauthorized exception occured", 401);
    }
    res.status(200).json(result);
}));


app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
