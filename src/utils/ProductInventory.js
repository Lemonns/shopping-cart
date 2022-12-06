import caribbeanOcto from '../images/caribbean-octopus.jpg';
import piranha from '../images/piranha.jpg';
import eel from '../images/electric-eel.jpg';
import shrimp from '../images/shrimp.png';
import shark from '../images/e-shark.jpg';
import koi from '../images/koi.jpg';
import mbu from '../images/mbu.jpg';
import knife from '../images/knifefish.jpg';
import lionfish from '../images/lionfish.jpg';

const productsArray = [
    {
        id: "f65fdcd0-6c55-11ed-a1eb-0242ac120002",
        title: "Caribbean Octopus",
        price: 149.99,
        image: caribbeanOcto,
    },
    {
        id: "fd0ea480-6c55-11ed-a1eb-0242ac120002",
        title: "Piranha",
        price: 24.99,
        image: piranha,
    },
    {
        id: "0f9f9d2a-6c56-11ed-a1eb-0242ac120002",
        title: "Electric Eel",
        price: 169.99,
        image: eel,
    },
    {
        id: "1f690a8e-6c56-11ed-a1eb-0242ac120002",
        title: "Mantis Shrimp",
        price: 49.99,
        image: shrimp
    },
    {
        id: "9e57da94-ff3f-4303-a1f0-087820a40a98",
        title: "Epaulette Shark",
        price: 499.99,
        image: shark,
    },
    {
        id: "304db82c-6c56-11ed-a1eb-0242ac120002",
        title: "Koi Fish",
        price: 19.99,
        image: koi,
    },
    {
        id: "8611b147-9312-403b-b05e-efc8c1d82970",
        title: "Mbu Puffer",
        price: 99.99,
        image: mbu,
    },
    {
        id: "c2f0fa91-b14e-466e-b94c-caed95e6de08",
        title: "Glass Knifefish",
        price: 9.99,
        image: knife,
    },
    {
        id: "abef75c6-9af8-46da-8054-a6d337cb0d6a",
        title: "Lionfish",
        price: 79.99,
        image: lionfish,
    }
]

const retrieveProduct = (id) => {
    let product = productsArray.find(product => product.id === id);
    if (product === undefined) {return undefined;}
    return product;
}

export { productsArray, retrieveProduct }