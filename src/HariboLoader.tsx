import HariboType from "./HariboType";

interface ContentfulSys {
    id: string
}

interface ContentfulHariboFields {
    name: string
    rating: number
}

interface ContentfulType {
    sys: ContentfulSys
    fields: ContentfulHariboFields
}

class HariboLoader {

    load(): Promise<Array<HariboType>> {
        const space = process.env.REACT_APP_CONTENTFUL_SPACE
        const token = process.env.REACT_APP_CONTENTFUL_TOKEN
        return fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(json => {
            return json.items.map((item: ContentfulType) => {
                return new HariboType(
                    item.sys.id, 
                    item.fields.name, 
                    item.fields.rating, 
                    new URL(`https://images.ctfassets.net/${space}/1QkDIxMUokEuw2C086ESU2/7976c98eff482a55220cfd71d2f154f2/weinland.jpg`)
                )
            })
        })
        .then(foo => {
            console.log(foo)
            return foo
        })
        .catch(error => {
            console.log(error)
            return []
        })
    }

}

export default HariboLoader;