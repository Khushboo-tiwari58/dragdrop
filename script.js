document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const dropContainer = document.getElementById('drop-container');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            setTimeout(() => {
                draggable.classList.add('hide');
            }, 0);
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('hide');
        });
    });

    dropContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        dropContainer.appendChild(draggable);
    });
});
