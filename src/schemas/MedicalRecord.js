const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
  animalId: String,
  visitDate: Date,
  description: String,
});

const MedicalRecord = mongoose.model('MedicalRecord', MedicalRecordSchema);

module.exports = MedicalRecord;
