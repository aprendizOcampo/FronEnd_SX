import app from "./app.js";
app.listen(app.get("port"), () => {
  console.log(`estas en puerto: http://localhost:${app.get("port")}`);
});