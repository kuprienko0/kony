export default class ModelContent {
    names = [
        {
            name : 'ID',
            type : 'integer'
        },
        {
            name : 'productName',
            type : 'string'
        },
        {
            name : 'manufacture',
            type : 'string'
        },
        {
            name : 'category',
            type : 'string'
        },
        {
            name : 'ingredients',
            type : 'string'
        },
        {
            name : 'amount',
            type : 'integer'
        },
        {
            name : 'units',
            type : 'string'
        },
        {
            name : 'price',
            type : 'float'
        },
        {
            name : 'img',
            type : 'string'
        }
    ];

    link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';
    getData = () => fetch(this.link).then((resp)=> resp.json()).then((data)=>this.parseData(data.feed.entry));
    parseData = arr => {
        const shift = this.names.length;
        return arr.reduce((acc, { content }, i) => {
            if (i <= 8) return acc;
            const index = Math.floor(i / shift);
            const { name, type } = this.names[i % shift];

            if(!acc[index]){
                acc[index] = {};
            }
            acc[index][name] = type === 'float' ? +(content.$t.replace(',', '.')) : content.$t;

            acc[index][name] = name === 'ingredients' ? content.$t.toLowerCase() : content.$t;

            return acc;
        }, []);

    }
}