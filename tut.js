function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.classList.contains('hidden')) {
        detailsElement.classList.remove('hidden');
    } else {
        detailsElement.classList.add('hidden');
    }
}



