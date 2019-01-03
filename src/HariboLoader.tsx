import HariboType from "./HariboItem";

class HariboLoader {

    load(): Promise<Array<HariboType>> {
        return new Promise((resolver, _) => {
            resolver([
                new HariboType('1', 'Weingummies'), 
                new HariboType('2', 'Bärchen paarchen'),
                new HariboType('3', 'Starmix')
            ])
        })
    }

}

export default HariboLoader;