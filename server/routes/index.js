var express = require("express");
const Esetech = require("../config");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("index route");
});

router.get("/profile", async (req, res) => {
  const snapshot = await Esetech.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

router.post("/profile", async (req, res) => {
  const data = req.body;
  await Esetech.add({ data });
  res.send({ msg: "profile Added" });
});

router.post("/profile/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await Esetech.doc(id).update(data);
  res.send({ msg: "Updated" });
});

router.post("/profile/delete", async (req, res) => {
  const id = req.body.id;
  await Esetech.doc(id).delete();
  res.send({ msg: "Deleted" });
});



module.exports = router;
