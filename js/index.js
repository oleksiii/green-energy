let resource = {
    b1: {
        heading: "Solar Solutions",
        bodyText: "We work with facility owners and managers to help incorporate our solar solutions into your new or existing projects. Over team help make your project a reality. Arrange multiple SolarZone stations in a single area to create a more collaborative working environment. With more than 6' bench-to-bench, users can work outside, maintain a safe distance while keeping charged up. Programmable lighting allows you to turn lights on and off on your schedule programmable data monitoring and controls.",
        imgUrl: "./img/solar-solutions.png"
    },
    b2: {
        heading: "Solar Energy Zone",
        bodyText: "The SolarZone charging and shade structure is the perfect solution for creating comfortable and functional outdoor seating areas. Ideal for universities, colleges, high schools, corporate campuses, cafes, restaurants, soccer fields, golf courses, or anywhere you need a seat in the shade and a place to get a charge! The SolarZone can be installed anywhere and does not require foundations or underground electrical work. Featuring Bluetooth programmable LED lighting and data monitoring, the SolarZone is available with optional bench seats and web based data monitoring.",
        imgUrl: "./img/green-energy-zone.png"
    },
    b3: {
        heading: "Energy Installers & Contractorss",
        bodyText: "Electrical equipment and batteries supplied by Green Energy, the industry leader for stand alone solar systems. Green energy products are sold directly to solar installers and not distribution. Our extensive installation experience informs product design  with the easier to build better systems. Whether you are designing a completely new building or retro-fitting an existing structure, we are here to help you easily integrate solar into your project. ",
        imgUrl: "./img/installers-contractors.png"
    }
};

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

/*Page Load*/
function pageLoad() {
    $content.innerHTML = `<h3>${resource.b1.heading}</h3>
                        <img src="${resource.b1.imgUrl}" alt="placeholder">
                          <p>${resource.b1.bodyText}</p>`;
}
window.addEventListener("load", pageLoad);


let Container = document.getElementById("navigation");
let batns = Container.getElementsByClassName("btn");

for (let i = 0; i < batns.length; i++) {
    batns[i].addEventListener("click", function() {
        let act = document.getElementsByClassName("active");
        act[0].className = act[0].className.removeAttribute(" active", "");
        this.className += " active";
    });
}

/*Event Handler*/
function handleSelection(ev) {
    let clickedBtn = ev.target;
    let btnText = clickedBtn.innerText;
    if (btnText === "page1") {
        $content.innerHTML = `<h3>${resource.b1.heading}</h3>
                              <img src="${resource.b1.imgUrl}" alt="placeholder">
                              <p>${resource.b1.bodyText}</p>`;
    } else if (btnText === "page2") {
        $content.innerHTML = `<h3>${resource.b2.heading}</h3>
                              <img src="${resource.b2.imgUrl}" alt="placeholder">
                              <p>${resource.b2.bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3>${resource.b3.heading}</h3>
                              <img src="${resource.b3.imgUrl}" alt="placeholder">
                              <p>${resource.b3.bodyText}</p>`;
    }
}

for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", handleSelection);
}