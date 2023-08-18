class ColorPallete {
    constructor() {
        this.kulfa();
    }
    kulfa() {
        document.documentElement.style.setProperty("--colorBackground", "#f3deba");
        document.documentElement.style.setProperty("--colorApp", "#dbc8a7");
        document.documentElement.style.setProperty("--colorInputBackground", "#d3d3d3");
        document.documentElement.style.setProperty("--colorMain", "#9ed7a9");
        document.documentElement.style.setProperty("--colorMain_ShadeOne", "#8ec298");
        document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#6f9776");
        document.documentElement.style.setProperty("--colorBoxShadow", "rgba(17, 20, 17, 0.5)");
        document.documentElement.style.setProperty("--colorText", "#1f1c18");
        document.documentElement.style.setProperty("--colorInputBorders", "#675d50");
        document.getElementById("kulfa").checked = true;
        document.querySelector("link[rel~='icon']").href = "favicon/favicon-kulfa.png";
    }
    saffron() {
        document.documentElement.style.setProperty("--colorBackground", "#e4dccf");
        document.documentElement.style.setProperty("--colorApp", "#cdc6ba");
        document.documentElement.style.setProperty("--colorInputBackground", "#d3d3d3");
        document.documentElement.style.setProperty("--colorMain", "#ea5455");
        document.documentElement.style.setProperty("--colorMain_ShadeOne", "#d34c4c");
        document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#bb4344");
        document.documentElement.style.setProperty("--colorBoxShadow", "rgba(23, 8, 8, 0.5)");
        document.documentElement.style.setProperty("--colorText", "#00162e");
        document.documentElement.style.setProperty("--colorInputBorders", "#002b5b");
        document.getElementById("saffron").checked = true;
        document.querySelector("link[rel~='icon']").href = "favicon/favicon-saffron.png";
    }
    fruitCocktail() {
        document.documentElement.style.setProperty("--colorBackground", "#f9ed69");
        document.documentElement.style.setProperty("--colorApp", "#f08a5d");
        document.documentElement.style.setProperty("--colorInputBackground", "#d87c54");
        document.documentElement.style.setProperty("--colorMain", "#b83b5e");
        document.documentElement.style.setProperty("--colorMain_ShadeOne", "#a63555");
        document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#a63555");
        document.documentElement.style.setProperty("--colorBoxShadow", "rgba(18, 6, 9, 0.5)");
        document.documentElement.style.setProperty("--colorText", "#351638");
        document.documentElement.style.setProperty("--colorInputBorders", "#401a43");
        document.getElementById("fruitCocktail").checked = true;
        document.querySelector("link[rel~='icon']").href = "favicon/favicon-fc.png";
    }
    breeze() {
        document.documentElement.style.setProperty("--colorBackground", "#393e46");
        document.documentElement.style.setProperty("--colorApp", "#222831");
        document.documentElement.style.setProperty("--colorInputBackground", "#2e3238");
        document.documentElement.style.setProperty("--colorMain", "#00adb5");
        document.documentElement.style.setProperty("--colorMain_ShadeOne", "#008a91");
        document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#33bdc4");
        document.documentElement.style.setProperty("--colorBoxShadow", "rgba(0, 17, 18, 0.5)");
        document.documentElement.style.setProperty("--colorText", "#dddddd");
        document.documentElement.style.setProperty("--colorInputBorders", "#eeeeee");
        document.getElementById("breeze").checked = true;
        document.querySelector("link[rel~='icon']").href = "favicon/favicon-breeze.png";
    }
    dracula() {
        document.documentElement.style.setProperty("--colorBackground", "#413543");
        document.documentElement.style.setProperty("--colorApp", "#2d2727");
        document.documentElement.style.setProperty("--colorInputBackground", "#342a36");
        document.documentElement.style.setProperty("--colorMain", "#8f43ee");
        document.documentElement.style.setProperty("--colorMain_ShadeOne", "#7236be");
        document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#a569f1");
        document.documentElement.style.setProperty("--colorBoxShadow", "rgba(14, 7, 24, 0.5)");
        document.documentElement.style.setProperty("--colorText", "#f0eb8d");
        document.documentElement.style.setProperty("--colorInputBorders", "#d8d47f");
        document.getElementById("dracula").checked = true;
        document.querySelector("link[rel~='icon']").href = "favicon/favicon-dracula.png";
    }
    sky() {
        document.documentElement.style.setProperty("--colorBackground", "#0f4c75");
        document.documentElement.style.setProperty("--colorApp", "#1b262c");
        document.documentElement.style.setProperty("--colorInputBackground", "#0c3d5e");
        document.documentElement.style.setProperty("--colorMain", "#3282b8");
        document.documentElement.style.setProperty("--colorMain_ShadeOne", "#286893");
        document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#478fbf");
        document.documentElement.style.setProperty("--colorBoxShadow", "rgba(5, 13, 18, 0.5)");
        document.documentElement.style.setProperty("--colorText", "#bbe1fa");
        document.documentElement.style.setProperty("--colorInputBorders", "#c2e4fb");
        document.getElementById("sky").checked = true;
        document.querySelector("link[rel~='icon']").href = "favicon/favicon-sky.png";
    }
}

function changeColor() {
    let colors = document.getElementById("themes-div");
    let radioBtns = document.querySelectorAll(".radio-dot");
    colors.addEventListener("click", () => {
        radioBtns.forEach((btn) => {
            if (btn.checked) {
                if (btn.value == "kulfa") color.kulfa();
                if (btn.value == "saffron") color.saffron();
                if (btn.value == "fruitCocktail") color.fruitCocktail();
                if (btn.value == "breeze") color.breeze();
                if (btn.value == "dracula") color.dracula();
                if (btn.value == "sky") color.sky();
                document.cookie = btn.value + "; expires=Tue, 31 Dec 2030 23:59:59 GMT";
            }
        });
    });
}

const color = new ColorPallete();

if (document.cookie == "kulfa") color.kulfa();
if (document.cookie == "saffron") color.saffron();
if (document.cookie == "fruitCocktail") color.fruitCocktail();
if (document.cookie == "breeze") color.breeze();
if (document.cookie == "dracula") color.dracula();
if (document.cookie == "sky") color.sky();

changeColor();

let themePopup = document.querySelector(".theme-popup").style;
document.getElementById("show-themes").onclick = () => {
  themePopup.visibility = "visible";
  themePopup.opacity = "1";
};

document.getElementById("close-themes").onclick = () => {
  themePopup.visibility = "hidden";
  themePopup.opacity = "0";
};

let usagePopup = document.querySelector(".usage-popup").style;
document.getElementById("usage-popup-open").onclick = () => {
  usagePopup.visibility = "visible";
  usagePopup.opacity = "1";
};

document.getElementById("usage-popup-close").onclick = () => {
  usagePopup.visibility = "hidden";
  usagePopup.opacity = "0";
};