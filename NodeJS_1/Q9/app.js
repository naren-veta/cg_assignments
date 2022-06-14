const fs = require('fs/promises');


async function readContentsArray() {
  const file_name = "./local.txt";
  let filehandle;
  try {
      filehandle = await fs.open(file_name, 'r');
      const data = await filehandle.readFile({ encoding: 'utf-8' });
    return  data.replace(/\r/g, "").replace(/\n/g, "").split(" ");
  }
  catch (err) {
      console.log(err);
  }
  finally {
      await filehandle.close();
  }
}

readContentsArray().then(result=>console.log(result))