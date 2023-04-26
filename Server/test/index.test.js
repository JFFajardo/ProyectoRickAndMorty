const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 999,
    name: 'Johan',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg'
}

describe('test de RUTAS', () => {

    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response =  await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/1');
            for(const prop in character){
                expect(response.body).toHaveProperty(prop);
            };            
        });

        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/666j');
            expect(response.statusCode).toBe(500)
        });
    });

    describe('GET /rickandmorty/login', () => {
        const access = {access: true};

        it('Responde un objeto con access en true si la información del usuario es válida', async () => {            
            const response =  await request.get('/rickandmorty/login?email=billy@gmail.com&password=gato123');            
            expect(response.body).toEqual(access);
        });

        it('Responde un objeto con access en false si la información del usuario no es válida', async () => {
            const response =  await request.get('/rickandmorty/login?email=billyberto@gmail.com&password=gatos123');
            access.access= false;
            expect(response.body).toEqual(access);
        });
    })

    describe('POST /rickandmorty/fav', () => {
        it('Se debe guardar el personaje en favoritos', async () => {     
            const response =  await request.post('/rickandmorty/fav').send(character);            
            expect(response.body).toContainEqual(character);
        });

        it('Se debe agregar personajes en favoritos sin eliminar existentes', async () => {    
            character.id = 1010;
            character.name = 'Billy';
            const response =  await request.post('/rickandmorty/fav').send(character);            
            expect(response.body.length).toBe(2);
        });
    })

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Se ID solicitado no existe, retorna un arreglo con los favoritos', async () => {     
            const response =  await request.delete('/rickandmorty/fav/2sf5');            
            expect(response.body.length).toBe(2);
        });

        it('Se ID solicitado existe, eliminarlo de favoritos', async () => {     
            const response =  await request.delete('/rickandmorty/fav/1010');            
            expect(response.body.length).toBe(1);
        });
    });
});


