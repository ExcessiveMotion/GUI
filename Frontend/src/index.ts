import "./index.scss"
import EM from "./Assets/Images/EM.svg"

// Simple test page with the Excessive Motion logo and some animations + text
fetch(EM).then((resp) => {
    resp.text().then(svg => {
        document.body.classList.add("noselect")
        document.body.innerHTML = `<div class="em-test"><div>${svg}${svg.replaceAll("<svg", "<svg class=\"sweep\"")}</div><span>Excessive Motion UI</span></div>`
    })
})
