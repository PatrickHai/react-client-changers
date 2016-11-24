let HOST;
let enviroment = 'sqs';
switch (enviroment) {
  case 'product':
    HOST = 'http://127.0.0.1:9000';
    break;
  case 'sqs':
    HOST = 'http://123.57.56.168:9000';
    break;
  default:
    HOST = 'http://127.0.0.1:9000';
    break;
}
export default HOST ;