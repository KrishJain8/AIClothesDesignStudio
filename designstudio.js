    <script>
        function showSpinner() {
            document.getElementById('spinner').style.display = 'block';
        }

        document.getElementById('image-form').addEventListener('submit', function(event) {
            event.preventDefault();

            var clothingArticle = document.querySelector('select[name="clothingArticle"]').value;
            var gender = document.querySelector('select[name="gender"]').value;
            var style = document.querySelector('select[name="style"]').value;
            var colorsPatterns = document.querySelector('input[name="colorsPatterns"]').value;
            var materialFabric = document.querySelector('input[name="materialFabric"]').value;
            var fit = document.querySelector('select[name="fit"]').value;
            var promptText = document.querySelector('textarea[name="prompt"]').value;

            var finalPrompt = "<strong>" + promptText.charAt(0).toUpperCase() + promptText.slice(1) + "</strong><br><br>" +
                "<strong>Article of Clothing:</strong> " + clothingArticle.charAt(0).toUpperCase() + clothingArticle.slice(1) + "<br>" +
                "<strong>Gender:</strong> " + gender.charAt(0).toUpperCase() + gender.slice(1) + "<br>" +
                "<strong>Style:</strong> " + style.charAt(0).toUpperCase() + style.slice(1) + "<br>" +
                "<strong>Colors/Patterns:</strong> " + colorsPatterns + "<br>" +
                "<strong>Material/Fabric:</strong> " + materialFabric + "<br>" +
                "<strong>Fit:</strong> " + fit.charAt(0).toUpperCase() + fit.slice(1);




            var promptContainer = document.getElementById('prompt-text');
            promptContainer.innerHTML = finalPrompt;

            var prompt = finalPrompt;
            var url = 'https://xx.api.cognitive.microsoft.com/openai/deployments/xx/images/generations?api-version=2024-02-01';
            var headers = {
                "api-key": "xxxxxxx",
                "Content-Type": "application/json"
            };
            var body = {
                "prompt": prompt,
                "size": "1024x1024",
                "n": 1,
                "quality": "hd",
                "style": "vivid"
            };

            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(data => {
                var imageUrl = data['data'][0]['url'];
                var imageContainer = document.getElementById('image-container');
                if (imageUrl.startsWith('Error')) {
                    imageContainer.innerHTML = '<p>' + imageUrl + '</p>';
                } else {
                    imageContainer.innerHTML = '<img src="' + imageUrl + '" alt="Generated Image">';
                    imageContainer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }); // Scroll to the image container
                    document.getElementById('spinner').style.display = 'none';
                }
            });
        });
    </script>
