class PunkService {
    _apiBase = 'https://api.punkapi.com/v2/';
    _page = 1;
    _perPage = 45;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllBeers = async (page = this._page) => {
        const res = await this.getResource(`${this._apiBase}beers?page=${page}&per_page=${this._perPage}`);
        return res.map(this._transformBeers);
    }

    _transformBeers = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            img: char.image_url,
            yeast: char.yeast,            
        }
    }
}

export default PunkService;