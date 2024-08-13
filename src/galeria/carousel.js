const galeria = document.getElementById("galeria")
const carousel = (direccion) =>{
    const observer = new IntersectionObserver((entradas) =>{
        console.log(entradas);
    })
      const slides = galeria.querySelectorAll(".galeria__carousel-image")
    console.log(slides);
    }

export default carousel;