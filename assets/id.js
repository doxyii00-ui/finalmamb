// Pobierz parametry z URL
var params = new URLSearchParams(window.location.search);
var docId = params.get('doc_id');

// Funkcja pobierania dokumentu z serwera
async function fetchDocumentData() {
    if (!docId) {
        // Jeśli brak doc_id, używaj starych parametrów
        return;
    }
    
    try {
        const response = await fetch(`/api/documents/${docId}`);
        if (response.ok) {
            const data = await response.json();
            // Przechowaj dane dokumentu w sessionStorage
            sessionStorage.setItem('document_data', JSON.stringify(data));
            // Przechowaj doc_id dla home.html
            sessionStorage.setItem('doc_id', docId);
        } else if (response.status === 404) {
            // Dokument nie istnieje
            document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #09020e; color: #ff3333; font-size: 1.5rem; font-family: Inter, sans-serif; text-align: center;">❌ Dokument nie istnieje lub został usunięty</div>';
        }
    } catch (error) {
        console.error('Błąd pobierania dokumentu:', error);
    }
}

// Pobierz dokument przy ładowaniu strony
fetchDocumentData();

// Obsługa kliknięcia przycisku login
document.querySelector(".login").addEventListener('click', () => {
    toHome();
});

// Powitanie w zależności od godziny
var welcome = "Dzień dobry!";
var date = new Date();
if (date.getHours() >= 18){
    welcome = "Dobry wieczór!";
}
document.querySelector(".welcome").innerHTML = welcome;

// Funkcja przekierowania do home.html z parametrami
function toHome(){
    // Jeśli mamy doc_id, przekieruj z nim
    if (docId) {
        location.href = 'home.html?doc_id=' + docId;
    } else {
        // W przeciwnym razie użyj starych parametrów
        location.href = 'home.html?' + params.toString();
    }
}

// Obsługa Enter w polu hasła
var input = document.querySelector(".password_input");
input.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        document.activeElement.blur();
    }
});

// Logika maskowania hasła
var dot = "•";
var original = "";
var eye = document.querySelector(".eye");

input.addEventListener("input", () => {
    var value = input.value.toString();
    var char = value.substring(value.length - 1);

    if (value.length < original.length){
        // Usunięto znak
        original = original.substring(0, original.length - 1);
    } else {
        // Dodano nowy znak
        original = original + char;
    }

    if (!eye.classList.contains("eye_close")){
        var dots = "";
        for (var i = 0; i < value.length - 1; i++){
            dots += dot;
        }
        input.value = dots + char;

        delay(3000).then(() => {
            if (input.value.length !== 0){
                input.value = input.value.substring(0, input.value.length - 1) + dot;
            }
        });
    }
});

// Funkcja delay
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Przełącznik oka
eye.addEventListener('click', () => {
    var classlist = eye.classList;
    if (classlist.contains("eye_close")){
        classlist.remove("eye_close");
        var dots = "";
        for (var i = 0; i < input.value.length; i++){
            dots += dot;
        }
        input.value = dots;
    } else {
        classlist.add("eye_close");
        input.value = original;
    }
});
