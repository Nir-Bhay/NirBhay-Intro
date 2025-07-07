// Job filter functionality
document.getElementById("location-filter").addEventListener("change", filterJobs);
document.getElementById("type-filter").addEventListener("change", filterJobs);

function filterJobs() {
    const location = document.getElementById("location-filter").value;
    const type = document.getElementById("type-filter").value;
    const jobs = document.querySelectorAll(".job");

    jobs.forEach(job => {
        const jobLocation = job.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
        const jobType = job.querySelector("p:nth-of-type(2)").textContent.toLowerCase();

        if (
            (location === "all" || jobLocation.includes(location)) &&
            (type === "all" || jobType.includes(type))
        ) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}

document.getElementById('apply-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    // Optionally, add any validation here before sending

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your application! We will be in touch soon.');
            this.reset();
        } else {
            alert('There was a problem submitting your application. Please try again.');
        }
    }).catch(error => {
        alert('There was a problem submitting your application. Please try again.');
    });
});

const backToTopButton = document.getElementById('back-to-top'); window.addEventListener('scroll', () => { if (window.pageYOffset > 300) { backToTopButton.style.display = 'block'; } else { backToTopButton.style.display = 'none'; } }); backToTopButton.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });