import fs from 'fs'
import YAML from 'yaml'



export const getChanels = async() => {
  const basePath = 'src/channels';
  const files = await fs.readdirSync(basePath);
  const results = []
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileContent = await fs.readFileSync(`${basePath}/${file}`, 'utf-8')
    results.push(YAML.parse(fileContent))
  }
  return results;
}