(async () => {
  try {
    const Rcn = require("./models/Rcn");

    const newRcn = await Rcn.create({
      edition: 126,
      description: "",
      deliveredAt: "2023-03-26 09:00:00-03",
    });
    console.log(newRcn);
  } catch (error) {
    console.log("---***---");
    console.error(error);
  }
})();
