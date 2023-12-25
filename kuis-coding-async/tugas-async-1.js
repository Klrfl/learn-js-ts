export function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === "id") {
        const data = [
          { id: "id-jk", name: "Jakarta" },
          { id: "id-bt", name: "Banten" },
          { id: "id-jr", name: "Jawa Barat" },
        ];

        resolve(data);
      }

      reject(new Error("Country not found"));
    }, 1000);
  });
}
