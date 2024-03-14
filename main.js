/////////////////////////////pembatas//////////////////////

// fetch('http://35.227.40.37/pokemon/v1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // Tambahkan baris ini untuk melihat data yang diterima

//         const genderRateContainer = document.getElementById('gender-rate-container');

//         // Set container to display flex diluar loop
//         genderRateContainer.style.display = 'flex';
//         genderRateContainer.style.flexWrap = 'wrap'; // Agar foto sejajar jika melebihi lebar layar
//         // genderRateContainer.style.alignItems = 'end';
//         genderRateContainer.style.paddingLeft = "10px";
//         // Loop through the array of pokemon objects
//         data.forEach(pokemon => { // Mengubah dari data.pokemon menjadi data
//             const category = pokemon;

//             if (category && category.name !== undefined) {
//                 const genderRateButton = document.createElement('a');
//                 genderRateButton.href = `generation.html?name=${category.name}`; // Perbaikan di sini
//                 genderRateButton.classList.add('gender-rate-buttons');
//                 genderRateButton.style.textDecoration = 'none';

//                 // Add gender rate and image to the button
//                 genderRateButton.innerHTML = 
//                     `<div style="text-align: center;">
//                         <img src="${pokemon.home.front_default}" style="width: 100px;">
//                         <p style="text-decoration: none; color: #fff;"> ${pokemon.name}</p> 
//                         <p style="text-decoration: none; color: #fff;"> ${pokemon.gender_rate}</p>
//                     </div>`;

//                 genderRateButton.addEventListener('click', () => {
//                     // Redirect to new page and pass Pokemon ID as parameter
//                     window.location.href = `generation.html?name=${category.name}`;
//                 });

//                 // Add the genderRateButton to the genderRateContainer
//                 genderRateContainer.appendChild(genderRateButton);
//             } else {
//                 console.error('ID data not found for ' + pokemon.name);
//             }
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching ID data:', error);
//     });



//     const params = new URLSearchParams(window.location.search);
//         const pokemonName = params.get('name');

//         if (pokemonName !== null) {
//             fetch(`http://35.227.40.37/pokemon/v1/${pokemonName}`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Invalid response from server');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     // Set data into HTML elements
//                     document.getElementById('pokemon-id').textContent = data.id;
//                     document.getElementById('pokemon-name').textContent = data.name;
//                     document.getElementById('pokemon-abilities').textContent = data.abilities.map(ability => ability.ability.name).join(', ');
//                     document.getElementById('pokemon-attack').textContent = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
//                     document.getElementById('pokemon-defense').textContent = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
//                     document.getElementById('pokemon-height').textContent = data.height;
//                     document.getElementById('pokemon-held-items').textContent = data.held_items.map(item => item.item.name).join(', ');
//                     document.getElementById('pokemon-hp').textContent = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
//                     document.getElementById('pokemon-special-attack').textContent = data.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
//                     document.getElementById('pokemon-special-defense').textContent = data.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
//                     document.getElementById('pokemon-speed').textContent = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
//                     document.getElementById('pokemon-weight').textContent = data.weight;
//                     document.getElementById('pokemon-image').src = data.sprites.front_default;
//                 })
//                 .catch(error => {
//                     console.error('Error fetching Pokemon details:', error);
//                 });
//         } else {
//             console.error('Invalid Pokemon Name:', pokemonName);
//         }

//         document.addEventListener('DOMContentLoaded', function () {
//             const searchInput = document.getElementById('responsive-search') || document.getElementById('search');
//             const pokemonDetailsContainer = document.getElementById('pokemon-details-content');

//             searchInput.addEventListener('input', function () {
//                 const pokemonName = this.value.trim().toLowerCase();
//                 if (pokemonName !== '') {
//                     fetch(`http://35.227.40.37/pokemon/v1/${pokemonName}`)
//                         .then(response => {
//                             if (!response.ok) {
//                                 throw new Error('Invalid response from server');
//                             }
//                             return response.json();
//                         })
//                         .then(data => {
//                             // Clear previous search results
//                             pokemonDetailsContainer.innerHTML = '';

//                             if (data && data.name !== undefined) {
//                                 // Display Pokemon details
//                                 pokemonDetailsContainer.innerHTML = `
//                                     <table>
//                                         <tr><td>ID:</td><td>${data.id}</td></tr>
//                                         <tr><td>Name:</td><td>${data.name}</td></tr>
//                                         <tr><td>Height:</td><td>${data.height}</td></tr>
//                                         <tr><td>Weight:</td><td>${data.weight}</td></tr>
//                                         <tr><td>Abilities:</td><td>${data.abilities.map(ability => ability.ability.name).join(', ')}</td></tr>
//                                     </table>
//                                     <img src="${data.sprites.front_default}" alt="Pokemon" id="pokemon-image" style="width: 100px; height: 100px;">`;
//                             } else {
//                                 pokemonDetailsContainer.innerHTML = '<p>No Pokemon found with that name.</p>';
//                             }
//                         })
//                         .catch(error => {
//                             console.error('Error fetching Pokemon details:', error);
//                             pokemonDetailsContainer.innerHTML = '<p>Error fetching Pokemon details. Please try again later.</p>';
//                         });
//                 }
//             });
//         });

fetch('http://35.227.40.37/pokemon/v1')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Tambahkan baris ini untuk melihat data yang diterima

        const genderRateContainer = document.getElementById('gender-rate-container');

        // Set container to display flex diluar loop
        genderRateContainer.style.display = 'flex';
        genderRateContainer.style.flexWrap = 'wrap'; // Agar foto sejajar jika melebihi lebar layar
        genderRateContainer.style.paddingLeft = "10px";
        // Loop through the array of pokemon objects
        data.forEach(pokemon => { // Mengubah dari data.pokemon menjadi data
            const category = pokemon;

            if (category && category.name !== undefined) {
                const genderRateButton = document.createElement('a');
                genderRateButton.href = `generation.html?name=${category.name}`; // Perbaikan di sini
                genderRateButton.classList.add('gender-rate-buttons');
                genderRateButton.style.textDecoration = 'none';

                // Add gender rate and image to the button
                genderRateButton.innerHTML = 
                    `<div style="text-align: center;">
                        <img src="${pokemon.home.front_default}" style="width: 100px;">
                        <p style="text-decoration: none; color: #fff;"> ${pokemon.name}</p> 
                        <p style="text-decoration: none; color: #fff;"> ${pokemon.gender_rate}</p>
                    </div>`;

                genderRateButton.addEventListener('click', () => {
                    // Redirect to new page and pass Pokemon ID as parameter
                    window.location.href = `generation.html?name=${category.name}`;
                });

                // Add the genderRateButton to the genderRateContainer
                genderRateContainer.appendChild(genderRateButton);
            } else {
                console.error('ID data not found for ' + pokemon.name);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching ID data:', error);
    });

// Hapus deklarasi const params yang ada di sini
// const params = new URLSearchParams(window.location.search);
// const pokemonName = params.get('name');

// if (pokemonName !== null) {
//     // Lakukan hal yang diperlukan dengan pokemonName
// } else {
//     console.error('Pokemon name is not provided in the URL');
// }


// if (pokemonName !== null) {
//     fetch(`http://35.227.40.37/pokemon/v1/${pokemonName}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Invalid response from server');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Set data into HTML elements
//             document.getElementById('pokemon-id').textContent = data.id;
//             document.getElementById('pokemon-name').textContent = data.name;
//             document.getElementById('pokemon-abilities').textContent = data.abilities.map(ability => ability.ability.name).join(', ');
//             document.getElementById('pokemon-attack').textContent = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
//             document.getElementById('pokemon-defense').textContent = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
//             document.getElementById('pokemon-height').textContent = data.height;
//             document.getElementById('pokemon-held-items').textContent = data.held_items.map(item => item.item.name).join(', ');
//             document.getElementById('pokemon-hp').textContent = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
//             document.getElementById('pokemon-special-attack').textContent = data.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
//             document.getElementById('pokemon-special-defense').textContent = data.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
//             document.getElementById('pokemon-speed').textContent = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
//             document.getElementById('pokemon-weight').textContent = data.weight;
//             document.getElementById('pokemon-image').src = data.sprites.front_default;
//         })
//         .catch(error => {
//             console.error('Error fetching Pokemon details:', error);
//         });
// } else {
//     console.error('Invalid Pokemon Name:', pokemonName);
// }

// // Tempatkan script berikut di bawah bagian fetch yang pertama
// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('responsive-search') || document.getElementById('search');
   

//     searchInput.addEventListener('input', function () {
//         const pokemonName = this.value.trim().toLowerCase();
//         if (pokemonName !== '') {
//             fetch(`http://35.227.40.37/pokemon/v1/${pokemonName}`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Invalid response from server');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     // Clear previous search results
//                     pokemonDetailsContainer.innerHTML = '';

//                     if (data && data.name !== undefined) {
//                         // Display Pokemon details
//                         pokemonDetailsContainer.innerHTML = `
//                             <table>
//                                 <tr><td>ID:</td><td>${data.id}</td></tr>
//                                 <tr><td>Name:</td><td>${data.name}</td></tr>
//                                 <tr><td>Height:</td><td>${data.height}</td></tr>
//                                 <tr><td>Weight:</td><td>${data.weight}</td></tr>
//                                 <tr><td>Abilities:</td><td>${data.abilities.map(ability => ability.ability.name).join(', ')}</td></tr>
//                             </table>
//                             <img src="${data.sprites.front_default}" alt="Pokemon" id="pokemon-image" style="width: 100px; height: 100px;">`;
//                     } else {
//                         pokemonDetailsContainer.innerHTML = '<p>No Pokemon found with that name.</p>';
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching Pokemon details:', error);
//                     pokemonDetailsContainer.innerHTML = '<p>Error fetching Pokemon details. Please try again later.</p>';
//                 });
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('responsive-search') || document.getElementById('search');
    const pokemonDetailsContainer = document.getElementById('pokemon-details-content');

    searchInput.addEventListener('input', function () {
        const pokemonName = this.value.trim().toLowerCase();
        if (pokemonName !== '') {
            fetch(`http://35.227.40.37/pokemon/v1/search?name=${pokemonName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Invalid response from server');
                    }
                    return response.json();
                })
                .then(data => {
                    // Clear previous search results
                    pokemonDetailsContainer.innerHTML = '';

                    if (data && data.name !== undefined) {
                        // Display Pokemon details
                        const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
                        let pokemonHtml = `
                            <table>
                                <tr><td>ID:</td><td>${data.id}</td></tr>
                                <tr><td>Name:</td><td>${data.name}</td></tr>
                                <tr><td>Height:</td><td>${data.height}</td></tr>
                                <tr><td>Weight:</td><td>${data.weight}</td></tr>
                                <tr><td>Abilities:</td><td>${abilities}</td></tr>
                            </table>`;

                        // Fetch front_default image URL from local API
                        fetch(`http://35.227.40.37/pokemon/v1/${pokemonName}`)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Invalid response from server');
                                }
                                return response.json();
                            })
                            .then(imageData => {
                                if (imageData && imageData.sprites && imageData.sprites.front_default) {
                                    pokemonHtml += `<img src="${imageData.sprites.front_default}" alt="Pokemon" id="pokemon-image" style="width: 100px; height: 100px;">`;
                                } else {
                                    pokemonHtml += '<p>No image available</p>';
                                }

                                pokemonDetailsContainer.innerHTML = pokemonHtml;

                                // Add click event listener to the image
                                const pokemonImage = document.getElementById('pokemon-image');
                                if (pokemonImage) {
                                    pokemonImage.addEventListener('click', function () {
                                        // Redirect to detail page
                                        const detailUrl = `review.html?name=${data.name}`;
                                        window.location.href = detailUrl;
                                    });
                                }
                            })
                            .catch(error => {
                                console.error('Error fetching Pokemon image:', error);
                                pokemonDetailsContainer.innerHTML = '<p>Error fetching Pokemon image. Please try again later.</p>';
                            });
                    } else {
                        pokemonDetailsContainer.innerHTML = '<p>No Pokemon found with that name.</p>';
                    }
                })
                .catch(error => {
                    console.error('Error fetching Pokemon details:', error);
                    pokemonDetailsContainer.innerHTML = '<p>Error fetching Pokemon details. Please try again later.</p>';
                });
        }
    });
});
