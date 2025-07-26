
const portfolioItems = [
    { title: "Project One", image: "images/work-1.jpg", category: "Web Design" },
    { title: "Project Two", image: "images/work-2.jpg", category: "App Development" },
    { title: "Project Three", image: "images/work-3.jpg", category: "Branding" },
    { title: "Project Four", image: "images/work-4.jpg", category: "UI/UX" },
    { title: "Project Five", image: "images/work-5.jpg", category: "Web Design" },
    { title: "Project Six", image: "images/work-6.jpg", category: "Mobile App" },
    { title: "Project Seven", image: "images/work-1.jpg", category: "Branding" },
    { title: "Project Eight", image: "images/work-2.jpg", category: "UI/UX" }
];

const itemsPerPage = 6;
let currentPage = 1;

function renderPortfolioItems(page = 1) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const itemsToShow = portfolioItems.slice(startIndex, endIndex);

    const container = document.getElementById("portfolio-items");
    container.innerHTML = "";

    itemsToShow.forEach(item => {
        const html = \`
            <div class="col-md-4">
                <div class="work-box">
                    <div class="work-img">
                        <img src="\${item.image}" class="img-fluid" alt="">
                    </div>
                    <div class="work-content">
                        <h2 class="w-title">\${item.title}</h2>
                        <div class="w-more">
                            <span class="w-ctegory">\${item.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        \`;
        container.innerHTML += html;
    });

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        btn.onclick = () => {
            currentPage = i;
            renderPortfolioItems(i);
        };
        btn.className = "btn btn-sm btn-primary m-1";
        if (i === currentPage) btn.classList.add("active");
        pagination.appendChild(btn);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderPortfolioItems();
});
