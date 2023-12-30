const MedicalRecord = require('../schemas/MedicalRecord')
// busco crear un historial medico con los datos del animal y el dia que tuvo la consulta y agregar una descripcion.
async function createMedicalRecord(animalId, visitDate, description) { 
  const record = await MedicalRecord.create({animalId, visitDate, description});
  return record;
};

async function getMedicalRecords(animalId, visitDate, description) {
  const records = await MedicalRecord.find({animalId, visitDate, description});
  return records;
}

module.exports = {createMedicalRecord, getMedicalRecords};
