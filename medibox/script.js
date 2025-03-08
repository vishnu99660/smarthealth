function getMedicine() {
    const disease = document.getElementById("disease").value;
    let medicine;

    switch (disease) {
        case "Cold":
            medicine = "Paracetamol, Antihistamines, Decongestants";
            break;
        case "Flu":
            medicine = "Tamiflu, Ibuprofen, Rest and Hydration";
            break;
        case "Headache":
            medicine = "Ibuprofen, Acetaminophen, Aspirin";
            break;
        case "Diabetes":
            medicine = "Metformin, Insulin, Glipizide";
            break;
        default:
            medicine = "Consult a doctor for the best recommendation.";
    }

    // Open a new window to display the medicine recommendation
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>Medicine Recommendation</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    text-align: center; 
                    padding: 20px; 
                    background-image: url('medico.jpg'); 
                    background-size: cover;
                }
                h1 { 
                    color: #007BFF; 
                    font-size: 24px; 
                }
                p { 
                    font-size: 18px; 
                    color: #333; 
                }
                .container {
                    background: rgba(255, 255, 255, 0.8);
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    display: inline-block;
                    margin-top: 50px;
                }
                button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Medicine Recommendation</h1>
                <p><strong>Disease:</strong> ${disease}</p>
                <p><strong>Recommended Medicine:</strong> ${medicine}</p>
                <button onclick="window.close()">Close</button>
            </div>
        </body>
        </html>
    `);
}