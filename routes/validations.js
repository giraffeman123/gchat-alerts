const { body , validationResult } = require('express-validator');
const ip = require('ip');
const log4js = require('log4js');
const responseTemplates = require('../utils/responseTemplates');
log4js.configure({
    appenders: { service: { type: 'file', filename: './service.log' } },
    categories: { default: { appenders: ['service'], level: 'error' } },
});
const logger = log4js.getLogger('service');

exports.getValidateSendK8Alert = [
    body('alerts').exists().withMessage(responseTemplates.ensureIsIncluded("alerts")),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let errores = responseTemplates.errorFormatter(
                400,
                'Bad request',
                errors.array()[0].msg,
                req.header('x-forwarded-for') || req.connection.remoteAddress,
                ip.address()
            );
            logger.error(JSON.stringify(errores.devError));
            return res.status(errores.userError.code).json(errores.userError);
        }
        next();
    },
];
