let HOST;
let enviroment = 'dev';
switch (enviroment) {
  case 'product':
    HOST = 'http://127.0.0.1:9000';
    break;
  default:
    HOST = 'http://127.0.0.1:9000';
    break;
}
export default HOST ;