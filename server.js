import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js'


const port = process.env.PORT || 3000

//Usa a env (variavel de ambiente) porta, ou se inexistente, usar a 3000

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`)
})



