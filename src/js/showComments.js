
export default function showComments() {
    const btn = document.querySelector('.article__comments-btn');

    if (btn) {
        btn.addEventListener('click', event => {
            event.preventDefault();
            btn.parentElement.classList.toggle('comments-shown')
        })
    }
}