const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
}



const kittySchema = new mongoose.Schema({
  name: String
});

mongoose.models = {};
const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'



export default main