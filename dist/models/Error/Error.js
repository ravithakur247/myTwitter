"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorName_1 = require("../../constant/errorName");
const httpStatus_1 = require("../../constant/httpStatus");
const message_1 = require("../../constant/message");
class CustomError extends Error {
    /**
     *
     */
    constructor(message, statusCode, name) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.name = name;
    }
}
exports.CustomError = CustomError;
class InternalServerError extends CustomError {
    /**
     *
     */
    constructor(message = message_1.Message.INTERNAL_SERVER_ERROR, statusCode = httpStatus_1.httpStatus.INTERNAL_ERROR, name = errorName_1.errorName.INTERNAL_SERVER_ERROR) {
        super(message, statusCode, name);
        this.message = message;
        this.statusCode = statusCode;
        this.name = name;
    }
}
exports.InternalServerError = InternalServerError;
