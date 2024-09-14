const params = new URLSearchParams(window.location.search);

        const place = params.get("place");
        const startDate = params.get("start-date");
        const endDate = params.get("end-date");
        const adults = params.get("adults");

        // Display the search info dynamically in the header
        const searchInfo = document.getElementById("search-info");
        searchInfo.innerText = `${place} · ${startDate} - ${endDate} · ${adults} adults`;

        // Back button to return to main.html
        document.getElementById("back-button").addEventListener("click", () => {
            window.location.href = "main.html";  // Redirect to main.html
        });