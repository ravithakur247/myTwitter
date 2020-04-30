"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["SUCCESS"] = 200] = "SUCCESS";
    httpStatus[httpStatus["SUCCESS_CREATE"] = 201] = "SUCCESS_CREATE";
    httpStatus[httpStatus["SUCCESS_UPDATE"] = 204] = "SUCCESS_UPDATE";
    httpStatus[httpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    httpStatus[httpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    httpStatus[httpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    httpStatus[httpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    httpStatus[httpStatus["NOT_ALLOWED"] = 405] = "NOT_ALLOWED";
    httpStatus[httpStatus["CONFLICT"] = 409] = "CONFLICT";
    httpStatus[httpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    httpStatus[httpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    httpStatus[httpStatus["RATE_LIMIT_EXCEEDED"] = 429] = "RATE_LIMIT_EXCEEDED";
    httpStatus[httpStatus["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
})(httpStatus = exports.httpStatus || (exports.httpStatus = {}));
