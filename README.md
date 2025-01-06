# AI Clothes Design Studio using Azure OpenAI and Dalle Model

This program allows users to design their own custom clothing, by entering a prompt and selecting various parameters such as the article of clothing, material, and colors, and generate the image using Microsoft OpenAI Dall-E3 model.

**Summary:**
This architecture leverages Azure OpenAI's Dall-E model to empower users to design custom clothing through a straightforward web interface. It seamlessly integrates frontend technologies like HTML, CSS, and JavaScript with Azure's powerful AI capabilities, providing a user-friendly and innovative solution for clothing design enthusiasts.

## Features

- **AI-Powered Design Generation**: Generates clothing designs based on user specifications using Azure OpenAI's DALL·E 3.
- **Customizable Inputs**: Users can customize clothing type, gender, style, color/pattern, material, and fit.
- **Real-Time Image Rendering**: The app generates and displays the clothing designs directly in the browser.
- **Spinner for Loading**: A spinner is displayed while the image is being generated for better user experience.
  
**Sample Prompt Text** Design a vibrant futuristic streetwear jacket inspired by the neon lights of Tokyo at night. Incorporating abstract geometric patterns and a mix of synthetic fabric that gives a subtle glow

![image](https://github.com/user-attachments/assets/54da9357-32ae-4e9b-9879-86a9574d829b)

**Demo Video** https://github.com/KrishJain8/AIClothesDesignStudio/raw/main/AIClothesDesignDemoVide.mp4

**Components**

These are the key technologies used for this technical content review and research:

- Azure OpenAI
- Dall-E3 Azure OpenAI Model
- HTML
- CSS
- JavaScript
## Prerequisites

- HTML and CSS (for front-end design)
- JavaScript (for user input handling and API integration)
- Access to the Azure OpenAI service
- Azure API key and endpoint for the DALL·E image generation service

## Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ai-clothes-design-studio.git
    cd ai-clothes-design-studio
    ```

2. **Setup your Azure OpenAI account**:
    - Sign up for the Azure OpenAI service and create an account.
    - Generate an API key and endpoint URL for DALL·E image generation.
  
3. **Update API keys**:
    - Replace the placeholder `"api-key": "xxxxxxxxxxx"` in the JavaScript code with your actual Azure OpenAI API key.
    - Replace the `url` variable with the appropriate endpoint for DALL·E generation from your Azure account.

4. **Run the application**:
    - Open `index.html` in your preferred browser.
  

**Azure OpenAI and Dall-E AI Model**

- Register for Azure Open AI: https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview
- Once approved, create Azure OpenAI resource in the Azure portal.
- Select the region you live in.
- Once the OpenAI resource is created, go to OpenAI studio.
- Create a Dall-E deployment inside the resource.
- Select the appropriate Dall-E model to use.
- Get the endpoint and key from the Dall-E resource in the OpenAI Studio under Deployments and use that to be called in the code as shown below. Replace _x_ with the endpoint and key.

```
var url = 'https://xx.api.cognitive.microsoft.com/openai/deployments/xx/images/generations?api-version=2024-02-01';
var headers = {
    "api-key": "xxxxxxx",
    "Content-Type": "application/json"
};
```

See here for more information about creating an OpenAI Dall-E resource: https://learn.microsoft.com/en-us/azure/ai-services/openai/dall-e-quickstart?tabs=dalle3%2Ccommand-line&pivots=programming-language-studio

**Process Flow:**

**User Interaction:**
User fills out the HTML form with desired parameters (e.g., article of clothing, material, colors).
User submits the form.

**Backend Process (Azure OpenAI):**
JavaScript captures form data and sends a POST request to the Azure OpenAI Dall-E endpoint.
The Dall-E endpoint interprets the input parameters as a prompt.

**Image Generation:**
Dall-E generates a custom image based on the prompt (e.g., design of the specified clothing).
The generated image URL is included in the JSON response.

**Frontend Display:** 
JavaScript retrieves the image URL from the JSON response. It dynamically updates the <img> tag within the designated on the webpage to display the AI-generated clothing design.

## How It Works

- **Input Form**: The user selects or enters clothing details, including:
    - Article of Clothing (e.g., Shirt, Pants, Dress, etc.)
    - Gender (Male, Female, Unisex)
    - Style (Casual, Formal, Athletic, etc.)
    - Colors/Patterns (e.g., Red, Stripes)
    - Material/Fabric (e.g., Cotton, Silk)
    - Fit (Slim, Regular, Loose)
  
- **Image Generation**: When the user submits the form, the input data is converted into a prompt for DALL·E. The AI generates an image of the clothing based on the provided details.

- **Output Display**: The generated image is displayed in the browser along with the custom prompt.

