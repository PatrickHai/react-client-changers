let HOST;
let enviroment = 'dev';
switch (enviroment) {
  case 'product':
    HOST = 'http://123.57.56.168:9000';
    break;
  default:
    HOST = 'http://123.57.56.168:9000';
    break;
}
export default HOST ;