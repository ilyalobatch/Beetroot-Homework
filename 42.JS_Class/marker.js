class Marker {
  constructor(color, ink) {
    // TASK No. 1
    this.color = color;
    // TASK No. 2
    this.ink = ink;
  }

  // TASK No. 3
  write(text) {
    let remainingInk = this.ink;
    let output = "";

    text.split("").forEach((letter) => {
      if (letter !== " " && remainingInk > 0) {
        output += letter;
        remainingInk -= 0.5;
      } else {
        output += " ";
      }
    });

    const container = document.createElement("div");
    container.innerHTML = `<p>${output}</p>`;
    container.style.color = this.color;
    document.body.append(container);
  }
}

// TASK No. 4
class RefillilledMarker extends Marker {
  refill() {
    this.ink = 100;
    console.log("Marker has been refilled");
  }
}

const blueMarker = new Marker("blue", 80);
blueMarker.write(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita fuga, quia ipsum nobis perspiciatis cumque facere sequi quisquam, accusantium, maiores sed. Deserunt quo dolore pariatur, consequatur atque aut reprehenderit?"
);

const greenMarker = new RefillilledMarker("green", 50);
greenMarker.write(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita fuga, quia ipsum nobis perspiciatis cumque facere sequi quisquam, accusantium, maiores sed. Deserunt quo dolore pariatur, consequatur atque aut reprehenderit?"
);

greenMarker.refill();

greenMarker.write(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita fuga, quia ipsum nobis perspiciatis cumque facere sequi quisquam, accusantium, maiores sed. Deserunt quo dolore pariatur, consequatur atque aut reprehenderit?"
);
