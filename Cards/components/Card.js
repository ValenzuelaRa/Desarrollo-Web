export default function Card({nombre,carrera,semestre,image:{uri,description}}){

    const card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = `
        <img src = '${uri}' alt = '${description}' class='card-avatar'>
        <div class='card-info'>
        <p class='card-info_title'>Carrera: ${carrera}</p>
        <p class='card-info_subtitle'>Nombre: ${nombre}</p>
        <p class='card-info_grade'>Semestre: ${semestre}</p>
        </div>
    `
    return card
}