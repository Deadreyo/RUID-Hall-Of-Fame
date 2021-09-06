
import * as FileSaver from "./node_modules/file-saver/dist/FileSaver.min.js";


const data = [
    {
        title: "Equipment & Inventory System",
        author: "NightKnight & FeelsGoodMan",
        description: "(GUI-Typescript) Equipment system that supports item types and stats, and works with GUI",
        link: "https://www.youtube.com/embed/gXFsS9zhRG0",
        projectName: "Acolyte of Life",
        projectLink: "https://www.hiveworkshop.com/threads/acolyte-of-life.330425/"
    },
    {
        title: "Code Lock UI",
        author: "FeelsGoodMan",
        description: "(GUI) System that enables the user to open locks using numbers.",
        link: "https://www.youtube.com/embed/McoJY_Z882A",
        projectName: "Acolyte of Life",
        projectLink: "https://www.hiveworkshop.com/threads/acolyte-of-life.330425/"
    },
    {
        title: "Trade System",
        author: "NightKnight",
        description: "(Typescript) A fully-functional system that enables the user to buy, sell or exchange items.",
        link: "https://www.youtube.com/embed/Ov8FzFXnjAY",
        projectName: "Acolyte of Life",
        projectLink: "https://www.hiveworkshop.com/threads/acolyte-of-life.330425/"
    },
    {
        title: "Quest Log",
        author: "FeelsGoodMan",
        description: "(GUI) An interface that displays quests, along with their descriptions.",
        link: "https://www.youtube.com/embed/zaIxuHGEtHc",
        projectName: "Acolyte of Life",
        projectLink: "https://www.hiveworkshop.com/threads/acolyte-of-life.330425/"
    },
    {
        title: "Combat Formation",
        author: "FeelsGoodMan",
        description: "(GUI) Interface designed to edit the formattion of the team.",
        link: "https://www.youtube.com/embed/lN9fAUHVFaI",
        projectName: "Acolyte of Life",
        projectLink: "https://www.hiveworkshop.com/threads/acolyte-of-life.330425/"
    },
]

document.onreadystatechange = () => {
    console.log("on")
    const insert = document.getElementById('insert')
    let row;
    
    for(let i = 0; i < data.length; i++) {
        let bg = " bg-info"
        if(i == 0) bg = " bg-danger"
        if(i == 1) bg = " bg-warning"
        if(i == 2) bg = " bg-success"
        if( i % 3 == 0) {
            row = document.createElement('div')
            row.classList = "row"
            if(i != 0) row.classList = "row mt-4"
            insert.appendChild(row)
        }
        let col = row.appendChild(document.createElement('div'))
        col.classList = "col-4 d-flex"
            let card = col.appendChild(document.createElement('div'))
            card.classList = "card border border-dark border-3"+bg
                let ratio = card.appendChild(document.createElement('div'))
                ratio.classList = "ratio ratio-1x1"
                    let iframe = ratio.appendChild(document.createElement('iframe'))
                    iframe.src = data[i].link
                    iframe.allowFullscreen = true;
                let cardbody = card.appendChild(document.createElement('div')); cardbody.classList = "card-body"
                    let title = cardbody.appendChild(document.createElement('h3'))
                    title.classList = "card-title"; title.innerText = data[i].title
                    let author = cardbody.appendChild(document.createElement('h5'))
                    author.classList = "card-subtitle mb-2 text-white"; author.innerText = "Made By "+data[i].author
                    let desc = cardbody.appendChild(document.createElement('p'))
                    desc.classList = "card-text"; desc.innerText = data[i].description;
                let cardfooter = card.appendChild(document.createElement('div')); cardfooter.classList = "card-footer"
                    let footer = cardfooter.appendChild(document.createElement('p'));
                    footer.classList = "text-black-50";
                    footer.innerHTML = `Project: <a target="_blank" href="${data[i].projectLink}">${data[i].projectName}</a>`
    
    }

    let str = document.getElementById('main').innerHTML
    let file = new File([str], "index-prod.html", {type: "text/plain;charset=utf-8"});
    
    // saveAs(file)
}