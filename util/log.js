import winston from "winston";

const logLevel = process.env.LOGLEVEL || "debug";

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console({
			level: logLevel
		}),
		new (winston.transports.File)({ filename: 'logger.log' })
	]
});

export default logger;
