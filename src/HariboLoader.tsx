class HariboLoader {

    load() {
        return new Promise((resolver, _) => {
            resolver(['Weingummies', 'Bärchen paarchen', 'Starmix'])
        })
    }

}

export default HariboLoader;