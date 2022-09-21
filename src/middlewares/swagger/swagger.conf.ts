import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'
import AddressIp from 'ip'
import { PORT } from '../../config/constant'


const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'NDORA', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'Notify, Deploy Once, Run Anywhere. 一次部署，到处运行的聚合通知。', // Description (optional)
  },
  host: `http://${AddressIp.address()}:${PORT}`, // Host (optional)
  basePath: '/', // Base path (optional)
}

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../../routes/*.ts')], // all api
}

const jsonSpc = swaggerJSDoc(options)
export default jsonSpc
