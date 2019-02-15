import HariboType from "./HariboType";

interface ContentfulSys {
    id: string
}

interface Link {

}

interface ContentfulAssetLink {
    url: string
}

interface Asset {
    file: ContentfulAssetLink
}

interface ContentfulHariboFields {
    name: string
    rating: number
    image: ContentfulType<Link>
}

interface ContentfulType<Fields> {
    sys: ContentfulSys
    fields: Fields
}

class HariboLoader {

    extractUrlForImage(imageLink: ContentfulType<Link>, json: any): URL {
        const result = json.includes.Asset.filter((foo: ContentfulType<Asset>) => foo.sys.id == imageLink.sys.id)
        return new URL('https:' + result[0].fields.file.url)
    }

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
                console.log(json)
                return json.items.map((item: ContentfulType<ContentfulHariboFields>) => {
                    return new HariboType(
                        item.sys.id,
                        item.fields.name,
                        item.fields.rating,
                        this.extractUrlForImage(item.fields.image, json)
                    )
                })
            })
            .catch(error => {
                console.log(error)
                return []
            })
    }

}

export default HariboLoader;