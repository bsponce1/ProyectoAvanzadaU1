const { db } = require("../firebase");
const { Router } = require("express");
const router = Router();

router.get("/alquilerf1", async (req, res) => {
  try {
    const querySnapshot = await db.collection("bicicletas").get();
    const bicicletas = querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(), // Aquí utilizamos el operador spread para obtener los datos del documento
      }));
    
    res.send(bicicletas);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

router.get("/alquilerf2", async (req, res) => {
  try {
    const querySnapshot = await db.collection("bicicletas").get();
    const bicicletas = querySnapshot.docs
      .filter((doc) => doc.data().estadof1 === true)
      .map((doc) => ({
        id: doc.id,
        ...doc.data(), // Aquí utilizamos el operador spread para obtener los datos del documento
      }));
    
    res.send(bicicletas);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});



router.put("/alquilerf1/:id", async (req, res) => {
  const idDocumento = req.params.id;
  console.log(req.body);
  // Reemplaza "nuevo_estado" por el estado que desees asignar al documento

  try {
    const docRef = db.collection("bicicletas").doc(idDocumento);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Documento no encontrado" });
    }

    await docRef.update({ estadof1: req.body.estadof1 });

    return res.json({ mensaje: "Estado cambiado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al cambiar el estado" });
  }
});

router.put("/alquilerf2/:id/", async (req, res) => {
  const idDocumento = req.params.id;
  // Reemplaza "nuevo_estado" por el estado que desees asignar al documento

  try {
    const docRef = db.collection("bicicletas").doc(idDocumento);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Documento no encontrado" });
    }

    await docRef.update({ estadof2: req.body.estadof2 });

    return res.json({ mensaje: "Estado cambiado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al cambiar el estado" });
  }
});


router.post('/alquiler', async (req, res) => {
  const alquiler = req.body;
  alquiler.estadof1 = false;
  alquiler.estadof2 = false;
  console.log(alquiler);
  await db.collection('bicicletas').add(alquiler);

  res.json('Alguiler creado exitosamente');
});


module.exports = router;