let searchValue = ''; 
const loadPhones = async(searchText, dataLimit) =>{
    console.log(searchText);
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data);
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) =>{
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    // console.log(phonesContainer);
    // phonesContainer.textContent = '';
    // display 10 phones only 
    // console.log(phones);
    const showAll = document.getElementById('show-all');
    // console.log(dataLimit);
    if( dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    console.log(phones);

    // display no phones found
    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
    // display all phones
    phones.forEach(phone =>{
        // console.log(phone);
        const phoneDiv  = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
        
    });
    // stop spinner or loader
    toggleSpinner(false);
}


const processSearch = (dataLimit, per) =>{
    const searchField = document.getElementById('search-field');
    searchValue = searchField.value;
    console.log(searchValue);
    let val = per ? per : searchField.value;
    // searchField.value = '';
    // // console.log(searchText);
    loadPhones(val, dataLimit);
    document.getElementById('search-field').value = '';
}


// handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
    // start loader
    // console.log('hello'); 
    processSearch(10);
})

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // console.log(e)
        processSearch(10);
    }
});

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


// not the best way to load show All
document.getElementById('btn-show-all').addEventListener('click', function(){
    // console.log('hello');
    processSearch(undefined, searchValue);
})

const loadPhoneDetails = async id =>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone =>{
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    console.log(phone.mainFeatures.sensors[0]);
    phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate}</p>
        <p>Storage: ${phone.mainFeatures.storage}</p>
        <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
        <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
    `
}

loadPhones('apple');

