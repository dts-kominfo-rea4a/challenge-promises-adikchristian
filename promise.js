const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi === null) {
      reject("maaf terjadi error");
    } else {
      let countMarah = 0;
      let countTidakMarah = 0;
      promiseTheaterIXX().then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].hasil == "marah") {
            countMarah++;
          } else {
            countTidakMarah++;
          }
        }
      });
      promiseTheaterVGC().then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].hasil == "marah") {
            countMarah++;
          } else {
            countTidakMarah++;
          }
        }
        if (emosi == "marah") {
          resolve(countMarah);
        } else {
          resolve(countTidakMarah);
        }
      });
    }
  });
};

module.exports = {
  promiseOutput,
};
