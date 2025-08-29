function getNavValue(id) {
    const NavValue = document.getElementById(id);
    const NavValueNumber = parseInt(NavValue.innerText); 
    return NavValueNumber;
}

// Hurt Increment

document.querySelectorAll('.hurt-btn').forEach(function(btn){
    btn.addEventListener('click', function () {
        let hurtValue = getNavValue('hurt');
        document.getElementById('hurt').innerText = hurtValue + 1; 
    });
});


// Select all heart buttons
document.querySelectorAll('.heart-btn').forEach(function(btn){
  btn.addEventListener('click', function() {
    // Toggle red color on click
    if(this.classList.contains('text-red-500')){
      this.classList.remove('text-red-500'); // remove red
      this.classList.add('text-gray-400');   // back to gray
    } else {
      this.classList.remove('text-gray-400'); // remove gray
      this.classList.add('text-red-500');     // set red
    }

    // Optional: smooth scale effect on click
    this.style.transform = 'scale(1.3)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 150);
  });
});

// Copy functionality

document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click', function() {
        const phoneNumber = this.closest('.bg-white').querySelector('.phone-number').textContent.trim();
        navigator.clipboard.writeText(phoneNumber);

        // Increment copy counter
        let copyUpdation = getNavValue('copy-update');
        document.getElementById('copy-update').innerText = copyUpdation + 1; 
    });
});


// Call History with Array

let callHistory = []; 

const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");

function renderHistory() {
    historyList.innerHTML = ""; 
    callHistory.slice().reverse().forEach(item => {
        const historyItem = document.createElement("div");
        historyItem.className = "flex justify-between items-center bg-gray-100 rounded-lg p-3";

        historyItem.innerHTML = `
            <div>
                <p class="font-bold">${item.title}</p>
                <p class="text-sm text-gray-600">${item.number}</p>
            </div>
            <div class="text-sm text-gray-500">${item.time}</div>
        `;

        historyList.appendChild(historyItem);
    });
}

// Function to add call history 
function addCallHistory(subTitleText, phoneNumber) {
    const now = new Date();
    const time = now.toLocaleTimeString();

    const newHistory = {
        title: subTitleText,
        number: phoneNumber,
        time: time
    };

    callHistory.push(newHistory);
    renderHistory(); 
}

// Clear button
clearBtn.addEventListener("click", function () {
    callHistory = []; 
    renderHistory();  
});

// Call functionality

document.querySelectorAll('.call-btn').forEach(function(btn){
    btn.addEventListener('click', function () {
        const card = this.closest('.bg-white');
        const subTitleText = card.querySelector('.sub-title').innerText;
        const phoneNumber = card.querySelector('.phone-number').innerText;
        const callTitle = `📞 Calling ${subTitleText} ${phoneNumber} ......`;

        let coinsValue = getNavValue('coins'); 

        if (coinsValue >= 20) {
            alert(callTitle);
            document.getElementById('coins').innerText = coinsValue - 20;
            
            addCallHistory(subTitleText, phoneNumber);

        } else {
            alert("❌ Call failed! Not enough coins in your balance.");

        }
    });
});