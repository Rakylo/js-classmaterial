const container = document.querySelector(".container");

async function getData() {
  try {
    const response = await fetch(" https://party-wedding.glitch.me/v1/party");
    console.log(response);
    if (response.ok) {
      const duomenys = await response.json();
      console.log(duomenys);
    }
  } catch (error) {
    console.log(error);
  }
}

getData();

const checkIfPersonVIP = (guests, guestName) => {
  const guest = guests.find((guest) => guest.name === guestName);
  document.body.innerText = guest
    ? `${guestName} ${guest.vip ? "is" : "isn't"} a VIP`
    : `${guestName} isn't found in the guest list`;
};
