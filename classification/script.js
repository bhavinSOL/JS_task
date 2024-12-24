const URL = "https://teachablemachine.withgoogle.com/models/your-model-url/";

let classifier;

// Initialize and load the model
async function init() {
    document.getElementById("loading").style.display = "block";
    classifier = await ml5.imageClassifier(URL + "model.json");
    console.log("Model loaded successfully!");
    document.getElementById("loading").style.display = "none";
}

// Event listener for image upload
document.getElementById("imageUpload").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
    }

    // Preview uploaded image
    const reader = new FileReader();
    reader.onload = () => {
        const imgElement = document.getElementById("uploadedImage");
        imgElement.src = reader.result;
        imgElement.style.display = "block";

        imgElement.onload = async () => {
            document.getElementById("loading").textContent = "Classifying...";
            document.getElementById("loading").style.display = "block";
            await classifyImage(imgElement);
            document.getElementById("loading").style.display = "none";
        };
    };
    reader.readAsDataURL(file);
});

// Classify the uploaded image
async function classifyImage(image) {
    try {
        const results = await classifier.classify(image);
        const labelContainer = document.getElementById("label-container");
        labelContainer.innerHTML = ""; // Clear previous results

        results.forEach((result) => {
            const resultDiv = document.createElement("div");
            resultDiv.textContent = `${result.label}: ${(result.confidence * 100).toFixed(2)}%`;
            labelContainer.appendChild(resultDiv);
        });
    } catch (error) {
        console.error("Error classifying image:", error);
    }
}
