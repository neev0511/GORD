var disease = localStorage.getItem("disease");
if (disease === "Fabry") {
  $("#disease").append(
    ` fabry
        ` +
      disease +
      `
    `
  );
} else if (disease === "Pompe") {
  $("#disease").append(
    `pompe
        ` +
      disease +
      `
    `
  );
} else {
  $("#disease").append(
    `sickle
        ` +
      disease +
      `
    `
  );
}
