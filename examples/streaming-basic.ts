import PetstoreTeest from '../src';

async function main() {
  const client = new PetstoreTeest({
    apiKey: process.env['PETSTORE_TEEST_API_KEY'] ?? '',
    baseURL: process.env['PETSTORE_TEEST_BASE_URL'],
  });

  // Tworzenie nowego zwierzaka
  const newPet = await client.pets.create({
    name: 'Fluffy',
    tag: 'cat',
  });

  console.log('Utworzono zwierzaka:', newPet);

  // Pobieranie zwierzaka po ID
  const pet = await client.pets.retrieve(newPet.id);
  console.log('Pobrano zwierzaka:', pet);

  // Listowanie wszystkich zwierząt
  const pets = await client.pets.list();
  console.log('Wszystkie zwierzęta:', pets);
}

main().catch(console.error);
