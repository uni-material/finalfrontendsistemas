async function uploadGame() {
    const game = document.getElementById('game').value;
    const comment = document.getElementById('comment').value;
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    // Verifica que todos los campos están completos
    if (!game || !comment || !file) {
        alert("Please fill out all fields.");
        return;
    }

    // Crear un objeto FormData y agregar los campos
    const formData = new FormData();
    formData.append('game', game);
    formData.append('comment', comment);
    formData.append('file', file);

    try {
        const response = await fetch('http://20.218.126.138:8080/report/', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('responseMessage').innerText = 'Game uploaded successfully!';
            console.log('Upload success:', result);
        } else {
            document.getElementById('responseMessage').innerText = 'Failed to upload game.';
            console.error('Upload failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Error uploading game.';
    }
}
