const products = [ 
     { id: 1, title: "Wireless Headphones", price: 59.99, image: "images/headphones.jpg" },
  { id: 2, title: "Smart Watch", price: 89.99, image: "images/smartwatch.jpg" },
  { id: 3, title: "Bluetooth Speaker", price: 39.99, image: "images/speaker.jpg" },
  { id: 4, title: "Gaming Mouse", price: 29.99, image: "images/mouse.jpg" },
  { id: 5, title: "Mechanical Keyboard", price: 79.99, image: "images/keyboard.jpg" },
  { id: 6, title: "Laptop Stand", price: 24.99, image: "images/laptop-stand.jpg" },
  { id: 7, title: "USB Hub", price: 19.99, image: "images/usb-hub.jpg" },
  { id: 8, title: "External Hard Drive", price: 99.99, image: "images/hard-drive.jpg" },
  { id: 9, title: "Portable Charger", price: 34.99, image: "images/powerbank.jpg" },
  { id: 10, title: "Web Camera", price: 49.99, image: "images/webcam.jpg" },
  { id: 11, title: "LED Monitor", price: 159.99, image: "images/monitor.jpg" },
  { id: 12, title: "Graphic Tablet", price: 69.99, image: "images/tablet.jpg" },
  { id: 13, title: "VR Headset", price: 199.99, image: "images/vr.jpg" },
  { id: 14, title: "Microphone", price: 54.99, image: "images/microphone.jpg" },
  { id: 15, title: "Tripod Stand", price: 22.99, image: "images/tripod.jpg" },
  { id: 16, title: "Ring Light", price: 27.99, image: "images/ringlight.jpg" },
  { id: 17, title: "Wireless Earbuds", price: 44.99, image: "images/earbuds.jpg" },
  { id: 18, title: "Laptop Backpack", price: 49.99, image: "images/backpack.jpg" },
  { id: 19, title: "Smartphone Gimbal", price: 119.99, image: "images/gimbal.jpg" },
  { id: 20, title: "Action Camera", price: 149.99, image: "images/action-camera.jpg" }
 ];

let productList = document.getElementById('product-list');

function renderProducts() {
    let productHTML = products.map(product => {
        // Generating unique placeholder images based on ID
        let displayImage = `https://picsum.photos/seed/${product.id}/300/200`;

        return `
            <div class="card">
                <img src="${displayImage}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="btn">Add to Cart</button>
            </div>
        `;
    }).join(''); 

    productList.innerHTML = productHTML;
}


renderProducts();

const data = {
    Pakistan: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    India: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    USA: ["New York", "Chicago", "Los Angeles", "Houston"]
};

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');


Object.keys(data).forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});


countrySelect.addEventListener('change', function() {

    citySelect.innerHTML = '<option value="">Select City</option>';
    
    const selectedCountry = this.value;

 
    if (selectedCountry && data[selectedCountry]) {
        data[selectedCountry].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});