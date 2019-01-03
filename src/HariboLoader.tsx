import HariboType from "./HariboType";

class HariboLoader {

    load(): Promise<Array<HariboType>> {
        return new Promise((resolver, _) => {
            resolver([
                new HariboType('1', 'Weingummies', 5, new URL("https://images.unsplash.com/photo-1546456073-f5315c713740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")), 
                new HariboType('2', 'Bärchen paarchen', 5, new URL("https://images.unsplash.com/photo-1546456073-f5315c713740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")),
                new HariboType('3', 'Starmix', 2, new URL("https://images.unsplash.com/photo-1546456073-f5315c713740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"))
            ])
        })
    }

}

export default HariboLoader;