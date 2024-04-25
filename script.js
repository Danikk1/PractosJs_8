document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('film-form');
    const titleInput = document.getElementById('title');
    const directorInput = document.getElementById('director');
    const yearInput = document.getElementById('year');
    const genreInput = document.getElementById('genre');
    const filmList = document.getElementById('film-list');
    const clearBtn = document.getElementById('clear-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            addFilm(titleInput.value, directorInput.value, yearInput.value, genreInput.value);
            form.reset();
        }
    });

    clearBtn.addEventListener('click', function () {
        filmList.innerHTML = '';
    });

    function validateForm() {
        if (titleInput.value.trim() === '' || directorInput.value.trim() === '' || yearInput.value === '' || genreInput.value === '') {
            alert('Пожалуйста, заполните все поля');
            return false;
        }
        return true;
    }

    function addFilm(title, director, year, genre) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${director}</td>
            <td>${year}</td>
            <td>${genre}</td>
            <td><button class="delete-btn">Удалить</button></td>
        `;
        filmList.appendChild(row);
    }

    filmList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.parentElement.remove();
        }
    });
});
