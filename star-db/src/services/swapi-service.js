class SwapiService {
    swapiURL = 'https://swapi.dev/api';

    getResource = async (url) => {
        const response = await fetch(`${this.swapiURL}${url}`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}.`);
        }
        const body = await response.json();
        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getPersonImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getPlanetImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getStarshipImage = ({ id }) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }

    _extractId = (text) => {
        const idRegExp = /\/(\d+)\/$/;
        const id = text.match(idRegExp)[1];
        return id;
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        }
    }



}

export default SwapiService;