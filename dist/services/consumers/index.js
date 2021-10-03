"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const sqs_consumer_1 = require("sqs-consumer");
const validatorJson_1 = __importDefault(require("@validator/validatorJson"));
const index_1 = __importDefault(require("@logs/index"));
aws_sdk_1.default.config.update({ region: 'us-east-2' });
const sqs = new aws_sdk_1.default.SQS({ apiVersion: '2012-11-05', region: 'us-east-2' });
exports.default = {
    backofficeConsumer: () => {
        const queueUrl = process.env.AWS_QUEUE;
        const consumer = sqs_consumer_1.Consumer.create({
            queueUrl,
            sqs,
            handleMessage: async (message) => {
                index_1.default.info(message.Body);
                const orderData = (0, validatorJson_1.default)(message.Body) && JSON.parse(message.Body);
                index_1.default.info(orderData.event + orderData.message);
                const deleteParams = {
                    QueueUrl: queueUrl,
                    ReceiptHandle: message.ReceiptHandle
                };
                sqs.deleteMessage(deleteParams, function (error, data) {
                    if (error) {
                        index_1.default.info('Delete Error');
                        index_1.default.error(index_1.default.beautify(error));
                    }
                    else {
                        index_1.default.info(`Message Deleted ${data}`);
                        index_1.default.info(index_1.default.beautify(data));
                    }
                });
            }
        });
        consumer.on('error', (err) => {
            index_1.default.error(err.message);
        });
        consumer.on('processing_error', (err) => {
            index_1.default.error(err.message);
        });
        consumer.on('timeout_error', (err) => {
            index_1.default.error(err.message);
        });
        consumer.start();
        index_1.default.info(`Queue ${queueUrl} initiated`);
    }
};
