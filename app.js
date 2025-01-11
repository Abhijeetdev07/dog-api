const fetchDogButton = document.getElementById('fetch-dog-btn');
    const dogImage = document.getElementById('dog-image');

    fetchDogButton.addEventListener('click', async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error('Failed to fetch dog image');
        }
        const data = await response.json();
        dogImage.src = data.message;
        dogImage.classList.remove('hidden');
      } catch (error) {
        console.error('Error:', error);
        alert('Could not fetch a dog image. Please try again later.');
      }
    });