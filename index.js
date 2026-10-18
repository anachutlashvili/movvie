let series=[
{
    title :"Breaking bad",
    year: 2008,
    rating:9.5,
    image:"https://i.pinimg.com/1200x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg",
},

{
    title :"Game of thrones",
    year: 2011,
    rating:9.2,
    image:"https://i.pinimg.com/736x/99/7e/8b/997e8b577cef7695a2e6e82b309147e2.jpg",
},

{
    title :"Stranger Things",
    year: 2016,
    rating:8.6,
    image:"https://i.pinimg.com/736x/e7/0d/39/e70d39ab29cd35545fa726de0b7414fa.jpg",
},

{
    title :"Money heist",
    year: 2017,
    rating:8.7,
    image:"https://i.pinimg.com/736x/6e/24/36/6e2436377bafda7e7c7a787cbf148187.jpg",
},

{
    title :"Better call saul",
    year: 2015,
    rating:9.0,
    image:"https://i.pinimg.com/1200x/a1/da/bd/a1dabd442eb202b2bff5aa3c4d4f076f.jpg",
},

{
    title :"Vikings",
    year: 2013,
    rating:8.5,
    image:"https://i.pinimg.com/1200x/94/80/39/94803945c64f55b9f571f296b61cf690.jpg",
},

{
    title: "Yellowstone",
    year: 2018,
    rating: 8.6,
    image: "https://i.pinimg.com/736x/66/89/31/66893136aa54f6a02d5ab1f44a353b99.jpg"
},

{
    title :"The Sopranos",
    year: 1999,
    rating:9.2,
    image:"https://i.pinimg.com/1200x/94/80/39/94803945c64f55b9f571f296b61cf690.jpg",
},

{
    title: "The Witcher",
    year: 2019,
    rating: 7.9,
    image: "https://i.pinimg.com/1200x/8e/1a/1a/8e1a1a3913fd44a2188dac98602a7a81.jpg"
},
{
    title: "The Last of Us",
    year: 2023,
    rating: 8.7,
    image: "https://i.pinimg.com/736x/55/3a/aa/553aaabe3df158e1e713da01f4eb73e2.jpg"
},
{
    title: "Sherlock",
    year: 2010,
    rating: 9.1,
    image: "https://i.pinimg.com/736x/19/ba/a1/19baa1a9eaab6474da73271c18b2cbb6.jpg"
},
{
    title: "Peaky Blinders",
    year: 2013,
    rating: 8.7,
    image: "https://i.pinimg.com/736x/46/48/b7/4648b76c626ece121f4c90336fd7e126.jpg"
},
{
    title: "The Walking Dead",
    year: 2010,
    rating: 8.1,
    image: "https://i.pinimg.com/1200x/41/a9/1c/41a91c32e844d34dc012aa77d3013a85.jpg"
 },
 {
    title: "The Boys",
    year: 2019,
    rating: 8.6,
    image: "https://i.pinimg.com/1200x/1b/71/c0/1b71c0c80711178fa42440391154db64.jpg"
},
{
    title: "Dark",
    year: 2017,
    rating: 8.7,
    image: "https://i.pinimg.com/736x/4a/05/84/4a0584034a710a63799384c7740a61ff.jpg"
},
{
    title: "The Office",
    year: 2005,
    rating: 9.0,
    image: "https://i.pinimg.com/1200x/41/eb/00/41eb00ad46225e2dff55a5b40dcd459c.jpg"
},

{
    title: "Prison Break",
    year: 2005,
    rating: 8.3,
    image: "https://i.pinimg.com/736x/d1/f2/a2/d1f2a283afa65cce39d016143ad9a3ca.jpg"
},
{
    title: "Lost",
    year: 2004,
    rating: 8.3,
    image: "https://i.pinimg.com/736x/cb/64/6b/cb646b1b3872bd71029883c2ee0c9150.jpg"
},


]
const seriesLink = document.getElementById("seriesLink");

const seriesPage = document.getElementById("seriesPage");
const seriesList = document.getElementById("seriesList");

seriesLink.addEventListener("click", (e) => {
    e.preventDefault();

    seriesPage.style.display = "block";
    seriesList.innerHTML = "";

    series.forEach(show => {

        seriesList.innerHTML += `
    
            <div class="series-card">
                <img src="${show.image}" 
                alt="${show.title}">
                <div class="series-info">
                    <h3>${show.title}</h3>
                    <p>${show.year}</p>
                    <span>⭐ ${show.rating} </span>
                </div>
            </div>
        `;
    });

    seriesPage.scrollIntoView({ behavior: "smooth" });
});


