let HOST;
let enviroment = 'dev';
switch (enviroment) {
  case 'product':
    HOST = 'http://10.182.88.196:8080/server';
    break;
  default:
    HOST = 'http://localhost:9000';
    break;
}
export default HOST ;