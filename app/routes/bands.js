import Route from "@ember/routing/route";
import EmberObject from "@ember/object";
import { A } from "@ember/array";

const Band = EmberObject.extend({
  name: "",
});

export default Route.extend({
  model() {
    let blackSabbath = Band.create({ name: "Black Sabbath" });
    let metallica = Band.create({ name: "Metallica" });
    let pearlJam = Band.create({ name: "Pearl Jam" });
    return A([blackSabbath, metallica, pearlJam]);
  },
});
