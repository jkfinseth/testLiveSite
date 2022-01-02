import React from "react";
import * as XLSX from "xlsx";

export const XLSXInput = (props) => {

  const {setter} = props;

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      let tempHolder = [];
      for (let x = 0; x < d.length; x++) {
          tempHolder.push({
              FirstName: d[x].FirstName,
              LastName: d[x].LastName,
              PrimaryPhone: d[x].CellPhone
          })
      }
      setter(tempHolder);
    });
  };

  return (
    <div>
      <input
        type="file"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
    </div>
  );
}