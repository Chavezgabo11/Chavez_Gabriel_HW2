let textbox = document.querySelector('#quote');
let photo = document.querySelector('#mainimg');
let photo2 = document.querySelector('#mainimg2');
let svg = document.querySelector('#plane');
let svg2 = document.querySelector('#palm');
let btn = document.querySelector('#runbutton');
let btnContainer = document.querySelector('#links');

function changePart2 () {
console.log(textbox.innerHTML);
textbox.style.height = 750 + 'px';
textbox.innerHTML = "<h1>My Biography - Part 2</h1><p>In 2018, my sister who has been dancing from her 4 years old get involved in a professional group of dancers called B77 so she always has participation in important TV programs and shows from my country. But they have to do a tour in a part of Central America and we have the opportunity to go with her on that tour so we visit Guatemala and Honduras.</p><p>In the same year my family in the USA invited me to visit them but my family could not travel because my sister has to dance at a few festivals so they allow me to travel alone that was my first travel completely alone at 17 years old with, My aunt had vacations so we take a touristic tour and we visited Virginia, Washington DC, Maryland, Pennsylvania, New Jersey and New York in 1 month that is one of my the best travel of my life.</p><p>Next year in 2019, I graduate from high school with a bachelor in that course I discovered that computational area is divided into two frontend and backend and my favourite area was the frontend or design so I started to look for a career that had only that area but in my country, I could not find any place that gives that course.</p><p>So I started to look outside of my country so in that search, I discovered that Fanshawe College had that course and accept international students so I applied to that college and get accepted for September of 2020.</p><p>At the final of 2019 I had vacation until September of 2020 but I decided to travel to the USA to visit my family and practice my English I travelled on 23 of December to the USA I planned to stay there for 4 months but that was were the pandemic starts in march I get obligated to return because my country announces that the airport will close.</p><p>2020 was weird because for pandemic the embassy of Canada close so my visa get delayed and I decided to delay my studies to next year expecting that covid end but I was wrong all 2020 was weird in which I stayed at home always but to me is normal because I'm not a person who likes to go out.</p><p>In the actual year in 2021, I started my classes and also receive my visa so I planned to move to Canada in march but in February Canada banned the flights from Central America and Caribe until may so actually I'm waiting for the reopening to move me to Canada in May but I'm not sure that that happens maybe Godzilla appears and destroy the world and that wouldn't surprise me now.</p>"
photo.src = 'images/Beach-travel.png';
photo2.src = 'images/Adventure-trip.png';
svg.src = 'images/parachuting.png';
svg2.src = 'images/controller.jpg'
svg2.style.width = 130 + 'px';
btnContainer.style.top = 800 + 'px';
}

btn.addEventListener('click', changePart2, false)
